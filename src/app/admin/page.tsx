import { db } from '@/lib/db/client'
import { blogPosts, users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import { FileText, Users, PenSquare, Eye } from 'lucide-react'
import { Button } from '@/components/ui'
import { requireAuth } from '@/lib/auth/validate'

async function getDashboardStats() {
  try {
    // Get total users
    const allUsers = await db.select().from(users)
    const totalUsers = allUsers.length

    // Get total blog posts
    const allPosts = await db.select().from(blogPosts)
    const totalPosts = allPosts.length

    // Get published posts
    const publishedPosts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.status, 'published'))
    const totalPublished = publishedPosts.length

    // Get draft posts
    const totalDrafts = totalPosts - totalPublished

    return {
      totalUsers,
      totalPosts,
      totalPublished,
      totalDrafts,
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalUsers: 0,
      totalPosts: 0,
      totalPublished: 0,
      totalDrafts: 0,
    }
  }
}

export default async function AdminDashboard() {
  await requireAuth()
  const stats = await getDashboardStats()

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      href: '/admin/users',
      color: 'bg-blue-500',
    },
    {
      title: 'Total Blog Posts',
      value: stats.totalPosts,
      icon: FileText,
      href: '/admin/blog',
      color: 'bg-green-500',
    },
    {
      title: 'Published Posts',
      value: stats.totalPublished,
      icon: Eye,
      href: '/admin/blog',
      color: 'bg-primary',
    },
    {
      title: 'Draft Posts',
      value: stats.totalDrafts,
      icon: PenSquare,
      href: '/admin/blog',
      color: 'bg-secondary',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-text-light">Welcome to the admin panel!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.title}
              href={stat.href}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
              <p className="text-sm text-text-light">{stat.title}</p>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-primary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/admin/blog/new">
            <Button variant="primary" className="w-full">
              <PenSquare className="w-4 h-4 mr-2" />
              Create New Blog Post
            </Button>
          </Link>
          <Link href="/admin/users">
            <Button variant="outline" className="w-full">
              <Users className="w-4 h-4 mr-2" />
              Manage Users
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
