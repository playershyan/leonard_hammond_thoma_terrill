import { db } from '@/lib/db/client'
import { blogPosts } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const POSTS_PER_PAGE = 9

async function getBlogPosts(page: number = 1) {
  try {
    const offset = (page - 1) * POSTS_PER_PAGE

    // Get published posts only
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(POSTS_PER_PAGE)
      .offset(offset)

    // Get total count for pagination
    const allPosts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'))

    return {
      posts,
      totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
      currentPage: page,
      totalPosts: allPosts.length,
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return {
      posts: [],
      totalPages: 0,
      currentPage: 1,
      totalPosts: 0,
    }
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const { posts, totalPages, totalPosts } = await getBlogPosts(currentPage)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16">
          <Container>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Legal Blog & Insights
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Expert legal insights, news, and updates from Leonard, Hammond, Thoma & Terrill
            </p>
          </Container>
        </div>

        {/* Blog Posts Grid */}
        <Container className="py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-text-light">No blog posts available yet.</p>
            <p className="text-text-light mt-2">Check back soon for legal insights and updates!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Featured Image */}
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

                    {/* Content */}
                    <div className="p-6">
                      {/* Date */}
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

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-primary mb-3 hover:text-primary-dark transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-text-light text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Read More Link */}
                      <div className="flex items-center text-primary font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                {/* Previous Button */}
                {currentPage > 1 && (
                  <Link
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </Link>
                )}

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                      key={page}
                      href={`/blog?page=${page}`}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        page === currentPage
                          ? 'bg-primary text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </Link>
                  ))}
                </div>

                {/* Next Button */}
                {currentPage < totalPages && (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}

            {/* Results Count */}
            <p className="text-center text-sm text-text-light mt-6">
              Showing {posts.length} of {totalPosts} posts
            </p>
          </>
        )}
        </Container>
      </div>
      <Footer />
    </>
  )
}
