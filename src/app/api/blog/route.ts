import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { getSession } from '@/lib/auth/session'

// GET /api/blog - Get all blog posts
export async function GET() {
  try {
    const posts = await db.select().from(blogPosts)
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

// POST /api/blog - Create new blog post
export async function POST(request: NextRequest) {
  try {
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

    // Validation
    if (!title || !slug || !content || !featuredImageUrl) {
      return NextResponse.json(
        { error: 'Title, slug, content, and featured image are required' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const [existingPost] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1)

    if (existingPost) {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 400 })
    }

    // Create blog post
    const [newPost] = await db
      .insert(blogPosts)
      .values({
        title,
        slug,
        excerpt: excerpt || null,
        content,
        featuredImageUrl,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        status: status || 'draft',
        authorId: session.userId,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
      })
      .returning()

    return NextResponse.json({ success: true, post: newPost }, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}
