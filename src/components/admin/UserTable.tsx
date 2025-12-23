'use client'

import { User } from '@/lib/db/schema'
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface UserTableProps {
  users: User[]
}

export function UserTable({ users }: UserTableProps) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (userId: string, username: string) => {
    if (!confirm(`Are you sure you want to delete user "${username}"?`)) {
      return
    }

    setDeletingId(userId)

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const data = await response.json()
        alert(data.error || 'Failed to delete user')
        setDeletingId(null)
        return
      }

      router.refresh()
    } catch (error) {
      alert('An error occurred while deleting the user')
      setDeletingId(null)
    }
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-light">No users found</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-background-gray">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
              Created At
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-text uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-primary">{user.username}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-text-light">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <div className="flex items-center justify-end gap-2">
                  <Link href={`/admin/users/edit/${user.id}`}>
                    <Button variant="ghost" size="sm">
                      <Pencil className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(user.id, user.username)}
                    disabled={deletingId === user.id}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    {deletingId === user.id ? 'Deleting...' : 'Delete'}
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
