import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { resend, EMAIL_CONFIG } from '@/lib/email'
import { ContactFormEmail } from '@/lib/email/templates/ContactFormEmail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const { name, email, phone, subject, message } = validationResult.data

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: EMAIL_CONFIG.to,
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        react: ContactFormEmail({
          name,
          email,
          phone,
          subject,
          message,
        }),
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        )
      }

      return NextResponse.json(
        {
          success: true,
          message: 'Your message has been sent successfully. We will get back to you soon!',
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
