'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input, Label } from '@/components/ui'
import { RichTextEditor } from './RichTextEditor'
import { Upload, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { BlogPost } from '@/lib/db/schema'

interface BlogPostFormProps {
  post?: BlogPost
  mode: 'create' | 'edit'
}

export function BlogPostForm({ post, mode }: BlogPostFormProps) {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    featuredImageUrl: post?.featuredImageUrl || '',
    metaTitle: post?.metaTitle || '',
    metaDescription: post?.metaDescription || '',
    status: post?.status || 'draft',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    setFormData({ ...formData, title })

    // Only auto-generate slug if creating new post and slug is empty
    if (mode === 'create' && !formData.slug) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      setFormData((prev) => ({ ...prev, title, slug }))
    } else {
      setFormData((prev) => ({ ...prev, title }))
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    setError('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Failed to upload image')
        setUploadingImage(false)
        return
      }

      const data = await response.json()
      setFormData({ ...formData, featuredImageUrl: data.url })
      setUploadingImage(false)
    } catch (err) {
      setError('Failed to upload image')
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent, status: string) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validation
    if (!formData.title || !formData.slug || !formData.content || !formData.featuredImageUrl) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    try {
      const url = mode === 'create' ? '/api/blog' : `/api/blog/${post?.id}`
      const method = mode === 'create' ? 'POST' : 'PUT'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status,
          publishedAt: status === 'published' ? new Date().toISOString() : null,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to save blog post')
        setLoading(false)
        return
      }

      // Success - redirect to blog list
      router.push('/admin/blog')
      router.refresh()
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <form className="space-y-8">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Basic Information */}
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold text-primary">Basic Information</h2>

        <div>
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <Label htmlFor="slug">URL Slug *</Label>
          <Input
            id="slug"
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="url-friendly-slug"
            required
          />
          <p className="mt-1 text-sm text-text-light">
            URL: /blog/{formData.slug || 'your-slug'}
          </p>
        </div>

        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Input
            id="excerpt"
            type="text"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Brief summary of the post"
          />
          <p className="mt-1 text-sm text-text-light">
            Short description shown in listings (recommended)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
        <h2 className="text-xl font-semibold text-primary">Content *</h2>
        <RichTextEditor
          content={formData.content}
          onChange={(html) => setFormData({ ...formData, content: html })}
          placeholder="Write your blog post content here..."
        />
      </div>

      {/* Featured Image */}
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
        <h2 className="text-xl font-semibold text-primary">Featured Image *</h2>

        {formData.featuredImageUrl ? (
          <div className="space-y-4">
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={formData.featuredImageUrl}
                alt="Featured image"
                fill
                className="object-cover"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploadingImage}
            >
              {uploadingImage ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Change Image
                </>
              )}
            </Button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploadingImage}
              className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-primary transition-colors disabled:opacity-50"
            >
              {uploadingImage ? (
                <>
                  <Loader2 className="w-12 h-12 text-primary mb-4 animate-spin" />
                  <p className="text-text-light">Uploading image...</p>
                </>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-text-light">Click to upload featured image</p>
                  <p className="text-sm text-text-light mt-2">JPEG, PNG, WebP, or GIF (max 5MB)</p>
                </>
              )}
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* SEO Metadata */}
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold text-primary">SEO Settings</h2>

        <div>
          <Label htmlFor="metaTitle">Meta Title</Label>
          <Input
            id="metaTitle"
            type="text"
            value={formData.metaTitle}
            onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
            placeholder="SEO title (defaults to post title)"
            maxLength={60}
          />
          <p className="mt-1 text-sm text-text-light">
            {formData.metaTitle.length}/60 characters
          </p>
        </div>

        <div>
          <Label htmlFor="metaDescription">Meta Description</Label>
          <Input
            id="metaDescription"
            type="text"
            value={formData.metaDescription}
            onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
            placeholder="SEO description (defaults to excerpt)"
            maxLength={160}
          />
          <p className="mt-1 text-sm text-text-light">
            {formData.metaDescription.length}/160 characters
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-4">
          <Button
            type="button"
            onClick={(e) => handleSubmit(e, 'draft')}
            variant="outline"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save as Draft'}
          </Button>
          <Button
            type="button"
            onClick={(e) => handleSubmit(e, 'published')}
            variant="primary"
            disabled={loading}
          >
            {loading ? 'Publishing...' : mode === 'create' ? 'Publish Post' : 'Update & Publish'}
          </Button>
          <Button type="button" variant="ghost" onClick={() => router.back()} disabled={loading}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  )
}
