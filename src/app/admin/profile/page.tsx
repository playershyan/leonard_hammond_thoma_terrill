'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input, Label } from '@/components/ui'
import { Loader2, User as UserIcon } from 'lucide-react'

export default function ProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [currentUserId, setCurrentUserId] = useState('')

  useEffect(() => {
    // Fetch current user data
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('/api/auth/me')
        if (!response.ok) {
          router.push('/admin/login')
          return
        }

        const data = await response.json()
        setFormData((prev) => ({
          ...prev,
          username: data.username,
        }))
        setCurrentUserId(data.id)
        setLoading(false)
      } catch (err) {
        setError('Failed to load profile')
        setLoading(false)
      }
    }

    fetchCurrentUser()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation for password change
    if (formData.newPassword || formData.confirmPassword) {
      if (!formData.currentPassword) {
        setError('Current password is required to change password')
        return
      }

      if (formData.newPassword !== formData.confirmPassword) {
        setError('New passwords do not match')
        return
      }

      if (formData.newPassword.length < 6) {
        setError('New password must be at least 6 characters')
        return
      }
    }

    setSaving(true)

    try {
      const updateData: any = {
        username: formData.username,
      }

      // Only include password if it's being changed
      if (formData.newPassword) {
        updateData.password = formData.newPassword
      }

      const response = await fetch(`/api/users/${currentUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to update profile')
        setSaving(false)
        return
      }

      // Success
      setSuccess('Profile updated successfully!')
      setFormData((prev) => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }))
      setSaving(false)

      // Refresh the page after a short delay
      setTimeout(() => {
        router.refresh()
      }, 1500)
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
        <h1 className="text-3xl font-heading font-bold text-primary mb-2">My Profile</h1>
        <p className="text-text-light">Manage your account settings</p>
      </div>

      <div className="max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Profile Icon */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary">{formData.username}</h2>
              <p className="text-sm text-text-light">Administrator</p>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Section */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Account Information</h3>
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
            </div>

            {/* Password Change Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Change Password</h3>
              <p className="text-sm text-text-light mb-4">
                Leave blank to keep your current password
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, currentPassword: e.target.value })
                    }
                    placeholder="Enter current password"
                    autoComplete="current-password"
                  />
                  <p className="mt-1 text-sm text-text-light">
                    Required to change password
                  </p>
                </div>

                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, newPassword: e.target.value })
                    }
                    placeholder="Enter new password (optional)"
                    minLength={6}
                    autoComplete="new-password"
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
                    autoComplete="new-password"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={saving}>
                {saving ? 'Saving Changes...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
