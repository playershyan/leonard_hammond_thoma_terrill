import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { getSession } from '@/lib/auth/session'

// GET /api/blog/[id] - Get single blog post
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1)

    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 })
  }
}

// PUT /api/blog/[id] - Update blog post
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    // Check authentication
    const session = await getSession()
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const {
      title,
      slug,
      excerpt,
      content,
      featuredImageUrl,
      metaTitle,
      metaDescription,
      status,
      publishedAt,
    } = body

    // Check if post exists
    const [existingPost] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .limit(1)

    if (!existingPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    // Validation
    if (!title || !slug || !content || !featuredImageUrl) {
      return NextResponse.json(
        { error: 'Title, slug, content, and featured image are required' },
        { status: 400 }
      )
    }

    // Check if new slug conflicts with another post
    if (slug !== existingPost.slug) {
      const [duplicatePost] = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.slug, slug))
        .limit(1)

      if (duplicatePost) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 400 }
        )
      }
    }

    // Update blog post
    const [updatedPost] = await db
      .update(blogPosts)
      .set({
        title,
        slug,
        excerpt: excerpt || null,
        content,
        featuredImageUrl,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        status: status || 'draft',
        publishedAt:
          status === 'published'
            ? publishedAt
              ? new Date(publishedAt)
              : existingPost.publishedAt || new Date()
            : null,
        updatedAt: new Date(),
      })
      .where(eq(blogPosts.id, id))
      .returning()

    return NextResponse.json({ success: true, post: updatedPost })
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 })
  }
}

// DELETE /api/blog/[id] - Delete blog post
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    // Check authentication
    const session = await getSession()
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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

    // Delete blog post
    await db.delete(blogPosts).where(eq(blogPosts.id, id))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 })
  }
}
