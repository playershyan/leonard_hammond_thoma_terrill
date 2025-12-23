'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact'
import { Button, Input, Label, Textarea } from '@/components/ui'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { trackContactFormSubmission, trackConsultationRequest } from '@/lib/analytics'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.',
        })
        setIsSubmitting(false)
        return
      }

      setSubmitStatus({
        type: 'success',
        message: result.message || 'Your message has been sent successfully!',
      })

      // Track successful contact form submission
      trackContactFormSubmission('email')
      trackConsultationRequest()

      // Reset form on success
      reset()
      setIsSubmitting(false)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      })
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`flex items-start gap-3 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          {submitStatus.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <p
            className={`text-sm ${
              submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}
          >
            {submitStatus.message}
          </p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(260) 123-4567"
          {...register('phone')}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      {/* Subject Field */}
      <div>
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          type="text"
          placeholder="How can we help you?"
          {...register('subject')}
          className={errors.subject ? 'border-red-500' : ''}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Please describe your legal needs and we'll get back to you as soon as possible..."
          {...register('message')}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Send className="w-4 h-4 mr-2 animate-pulse" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>

      {/* Privacy Notice */}
      <p className="text-sm text-text-light text-center">
        By submitting this form, you agree to our privacy policy. We will never share your
        information with third parties.
      </p>
    </form>
  )
}
