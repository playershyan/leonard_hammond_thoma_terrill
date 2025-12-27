import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { getSession } from '@/lib/auth/session'

// PATCH /api/blog/[id]/status - Toggle blog post status
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    // Check authentication
    const session = await getSession()
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { status } = body

    if (!status || !['published', 'draft'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    // Check if post exists
    const [existingPost] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .limit(1)

    if (!existingPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    // Update status
    const [updatedPost] = await db
      .update(blogPosts)
      .set({
        status,
        publishedAt:
          status === 'published'
            ? existingPost.publishedAt || new Date()
            : existingPost.publishedAt,
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, id))
      .returning()

    return NextResponse.json({ success: true, post: updatedPost })
  } catch (error) {
    console.error('Error updating blog post status:', error)
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 })
  }
}
