import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { desc } from 'drizzle-orm'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { PenSquare } from 'lucide-react'
import { BlogPostTable } from '@/components/admin/BlogPostTable'

async function getBlogPosts() {
  try {
    const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt))
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function AdminBlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">
            Blog Posts Management
          </h1>
          <p className="text-text-light">Create, edit, and manage your blog content</p>
        </div>
        <Link href="/admin/blog/new">
          <Button variant="primary">
            <PenSquare className="w-4 h-4 mr-2" />
            New Blog Post
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {posts.length === 0 ? (
          <div className="text-center py-12 px-6">
            <p className="text-text-light mb-4">No blog posts yet</p>
            <Link href="/admin/blog/new">
              <Button variant="primary">Create Your First Post</Button>
            </Link>
          </div>
        ) : (
          <BlogPostTable posts={posts} />
        )}
      </div>
    </div>
  )
}
