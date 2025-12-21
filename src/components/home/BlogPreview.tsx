import { Section, SectionTitle, Button } from '@/components/ui'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export function BlogPreview() {
  // Placeholder data - will be replaced with database fetch
  const posts = [
    {
      title: 'Understanding the Divorce Process in Indiana',
      excerpt:
        'Learn about the steps involved in filing for divorce in Fort Wayne and what to expect during proceedings...',
      date: '2025-01-15',
      slug: 'understanding-divorce-process',
    },
    {
      title: 'What to Do After a Car Accident',
      excerpt:
        'Essential steps to protect your rights and maximize compensation after being injured in an auto accident...',
      date: '2025-01-10',
      slug: 'what-to-do-after-car-accident',
    },
    {
      title: 'Your Rights During a Police Stop',
      excerpt:
        'Know your constitutional rights when stopped by law enforcement and how to protect yourself...',
      date: '2025-01-05',
      slug: 'rights-during-police-stop',
    },
  ]

  return (
    <Section variant="gray">
      <SectionTitle>Latest News & Insights</SectionTitle>
      <p className="text-center text-text-light mb-12">Stay informed with our expert blogs</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-text-light mb-3">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString()}</time>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
              <p className="text-text-light text-sm mb-4">{post.excerpt}</p>
              <span className="text-primary font-semibold">Read More →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/blog">
          <Button variant="outline">View All Blog Posts</Button>
        </Link>
      </div>
    </Section>
  )
}
