import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BlogPostForm } from '@/components/admin/BlogPostForm'
import { requireAuth } from '@/lib/auth/validate'

export default async function NewBlogPostPage() {
  await requireAuth()
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/blog"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog Posts
        </Link>
        <h1 className="text-3xl font-heading font-bold text-primary mb-2">Create New Blog Post</h1>
        <p className="text-text-light">Write and publish a new article</p>
      </div>

      <BlogPostForm mode="create" />
    </div>
  )
}
