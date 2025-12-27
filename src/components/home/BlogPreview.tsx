import { Section, SectionTitle, Button } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'

async function getRecentPosts() {
  try {
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(3)

    return posts
  } catch (error) {
    console.error('Error fetching recent blog posts:', error)
    return []
  }
}

export async function BlogPreview() {
  const posts = await getRecentPosts()

  // If no posts, show a message
  if (posts.length === 0) {
    return (
      <Section variant="gray">
        <SectionTitle>Latest News & Insights</SectionTitle>
        <p className="text-center text-text-light mb-12">
          Stay informed with our expert legal blogs
        </p>
        <div className="text-center py-12">
          <p className="text-text-light mb-6">No blog posts available yet.</p>
          <p className="text-sm text-text-light">Check back soon for legal insights and updates!</p>
        </div>
      </Section>
    )
  }

  return (
    <Section variant="gray">
      <SectionTitle>Latest News & Insights</SectionTitle>
      <p className="text-center text-text-light mb-12">
        Stay informed with our expert legal blogs
      </p>

      {/* Mobile: Horizontal scrollable, Desktop: Grid */}
      <div className="mb-8">
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-4 px-4 md:px-0 md:pb-0 -mx-4 md:mx-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex-shrink-0 w-[85vw] md:w-auto md:flex-shrink snap-start bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                {post.featuredImageUrl && (
                  <Image
                    src={post.featuredImageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                {post.publishedAt && (
                  <div className="flex items-center gap-2 text-sm text-text-light mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.publishedAt.toISOString()}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-text-light text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                )}
                <span className="text-primary font-semibold">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/blog">
          <Button variant="outline">View All Blog Posts</Button>
        </Link>
      </div>
    </Section>
  )
}
