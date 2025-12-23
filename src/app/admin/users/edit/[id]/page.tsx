'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input, Label } from '@/components/ui'
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function EditUserPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    // Fetch user data
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${params.id}`)
        if (!response.ok) {
          setError('User not found')
          setLoading(false)
          return
        }

        const data = await response.json()
        setFormData({
          username: data.username,
          password: '',
          confirmPassword: '',
        })
        setLoading(false)
      } catch (err) {
        setError('Failed to load user')
        setLoading(false)
      }
    }

    fetchUser()
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation for password if provided
    if (formData.password || formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        return
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters')
        return
      }
    }

    setSaving(true)

    try {
      const updateData: any = {
        username: formData.username,
      }

      // Only include password if it's being changed
      if (formData.password) {
        updateData.password = formData.password
      }

      const response = await fetch(`/api/users/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to update user')
        setSaving(false)
        return
      }

      // Success - redirect to users list
      router.push('/admin/users')
      router.refresh()
    } catch (err) {
      setError('An error occurred. Please try again.')
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/users"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Users
        </Link>
        <h1 className="text-3xl font-heading font-bold text-primary mb-2">Edit User</h1>
        <p className="text-text-light">Update user account information</p>
      </div>

      <div className="max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username">Username *</Label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter username"
                required
                minLength={3}
                maxLength={50}
              />
              <p className="mt-1 text-sm text-text-light">
                Username must be between 3 and 50 characters
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Change Password</h3>
              <p className="text-sm text-text-light mb-4">
                Leave blank to keep the current password
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="password">New Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter new password (optional)"
                    minLength={6}
                  />
                  <p className="mt-1 text-sm text-text-light">
                    Password must be at least 6 characters
                  </p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPassword: e.target.value })
                    }
                    placeholder="Confirm new password"
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={saving}>
                {saving ? 'Saving Changes...' : 'Save Changes'}
              </Button>
              <Link href="/admin/users">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
