'use client'

import { BlogPost } from '@/lib/db/schema'
import { Pencil, Trash2, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface BlogPostTableProps {
  posts: BlogPost[]
}

export function BlogPostTable({ posts }: BlogPostTableProps) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [togglingId, setTogglingId] = useState<string | null>(null)

  const handleDelete = async (postId: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return
    }

    setDeletingId(postId)

    try {
      const response = await fetch(`/api/blog/${postId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const data = await response.json()
        alert(data.error || 'Failed to delete blog post')
        setDeletingId(null)
        return
      }

      router.refresh()
    } catch (error) {
      alert('An error occurred while deleting the blog post')
      setDeletingId(null)
    }
  }

  const handleToggleStatus = async (postId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published'
    setTogglingId(postId)

    try {
      const response = await fetch(`/api/blog/${postId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) {
        const data = await response.json()
        alert(data.error || 'Failed to update status')
        setTogglingId(null)
        return
      }

      router.refresh()
    } catch (error) {
      alert('An error occurred while updating status')
      setTogglingId(null)
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-background-gray">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
              Published
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-text uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-primary line-clamp-2 max-w-md">
                  {post.title}
                </div>
                {post.excerpt && (
                  <div className="text-xs text-text-light line-clamp-1 mt-1">
                    {post.excerpt}
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleToggleStatus(post.id, post.status)}
                  disabled={togglingId === post.id}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    post.status === 'published'
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } transition-colors disabled:opacity-50`}
                >
                  {post.status === 'published' ? (
                    <Eye className="w-3 h-3 mr-1" />
                  ) : (
                    <EyeOff className="w-3 h-3 mr-1" />
                  )}
                  {togglingId === post.id
                    ? 'Updating...'
                    : post.status === 'published'
                    ? 'Published'
                    : 'Draft'}
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-text-light">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : '-'}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <div className="flex items-center justify-end gap-2">
                  {post.status === 'published' && (
                    <Link href={`/blog/${post.slug}`} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                  )}
                  <Link href={`/admin/blog/edit/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      <Pencil className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(post.id, post.title)}
                    disabled={deletingId === post.id}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    {deletingId === post.id ? 'Deleting...' : 'Delete'}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
