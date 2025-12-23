import Link from 'next/link'
import { Container, Button } from '@/components/ui'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Container className="text-center py-20">
        <FileQuestion className="w-24 h-24 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-heading font-bold text-primary mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
          Sorry, we couldn't find the blog post you're looking for. It may have been removed or
          the URL might be incorrect.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/blog">
            <Button variant="primary">View All Posts</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Go Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
