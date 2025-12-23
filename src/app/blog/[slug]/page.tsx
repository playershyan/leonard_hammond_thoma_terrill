import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { eq, and, desc } from 'drizzle-orm'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import { Container, Button } from '@/components/ui'
import type { Metadata } from 'next'

async function getBlogPost(slug: string) {
  try {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(and(eq(blogPosts.slug, slug), eq(blogPosts.status, 'published')))
      .limit(1)

    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getRelatedPosts(currentPostId: string, limit: number = 3) {
  try {
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(limit + 1)

    // Filter out current post and limit results
    return posts.filter((post) => post.id !== currentPostId).slice(0, limit)
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt || undefined,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt || undefined,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      images: post.featuredImageUrl ? [post.featuredImageUrl] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id)

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog Link */}
      <div className="bg-background-gray border-b">
        <Container className="py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Container>
      </div>

      {/* Featured Image */}
      {post.featuredImageUrl && (
        <div className="relative w-full h-[400px] bg-gray-200">
          <Image
            src={post.featuredImageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <article className="py-12">
        <Container className="max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            {/* Date */}
            {post.publishedAt && (
              <div className="flex items-center gap-2 text-text-light mb-4">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.publishedAt.toISOString()}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-text-light leading-relaxed border-l-4 border-secondary pl-6">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-primary
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-text prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary prose-strong:font-semibold
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-text prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic
              prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-background-gray rounded-lg border border-gray-200">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-text-light mb-6">
              Our experienced attorneys are here to help. Contact us today for a consultation.
            </p>
            <Link href="/contact">
              <Button variant="primary">Contact Us Today</Button>
            </Link>
          </div>
        </Container>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-background-gray py-16 border-t">
          <Container>
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {relatedPost.featuredImageUrl && (
                    <div className="relative h-40 bg-gray-200">
                      <Image
                        src={relatedPost.featuredImageUrl}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    {relatedPost.excerpt && (
                      <p className="text-sm text-text-light line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                    )}
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}
