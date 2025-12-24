import { db } from '@/lib/db/client'
import { users } from '@/lib/db/schema'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { UserPlus } from 'lucide-react'
import { UserTable } from '@/components/admin/UserTable'
import { requireAuth } from '@/lib/auth/validate'

async function getUsers() {
  try {
    const allUsers = await db.select().from(users).orderBy(users.createdAt)
    return allUsers
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}

export default async function UsersPage() {
  await requireAuth()

  const allUsers = await getUsers()
  const canAddUser = allUsers.length < 3

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">User Management</h1>
          <p className="text-text-light">
            Manage admin users (maximum 3 users allowed)
          </p>
        </div>
        <Link href="/admin/users/new">
          <Button variant="primary" disabled={!canAddUser}>
            <UserPlus className="w-4 h-4 mr-2" />
            Add New User
          </Button>
        </Link>
      </div>

      {!canAddUser && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded mb-6">
          Maximum number of users (3) reached. Delete a user to add a new one.
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm">
        <UserTable users={allUsers} />
      </div>
    </div>
  )
}
