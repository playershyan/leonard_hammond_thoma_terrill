import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { BlogPostForm } from '@/components/admin/BlogPostForm'
import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'

async function getBlogPost(id: string) {
  try {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1)
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  if (!post) {
    notFound()
  }

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
        <h1 className="text-3xl font-heading font-bold text-primary mb-2">Edit Blog Post</h1>
        <p className="text-text-light">Update and manage your article</p>
      </div>

      <BlogPostForm post={post} mode="edit" />
    </div>
  )
}
