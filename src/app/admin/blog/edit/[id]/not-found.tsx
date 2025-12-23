import Link from 'next/link'
import { Button } from '@/components/ui'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-gray flex items-center justify-center">
      <div className="text-center py-20 px-6">
        <FileQuestion className="w-24 h-24 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-heading font-bold text-primary mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
          Sorry, we couldn't find the blog post you're trying to edit.
        </p>
        <Link href="/admin/blog">
          <Button variant="primary">Back to Blog Posts</Button>
        </Link>
      </div>
    </div>
  )
}
