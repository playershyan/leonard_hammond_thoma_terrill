'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, FileText, Users, LogOut, User } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'My Profile', href: '/admin/profile', icon: User },
  ]

  return (
    <aside className="w-64 bg-primary text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-heading font-bold">Admin Panel</h2>
      </div>

      <nav className="px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-md transition-colors',
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}

        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </form>
      </nav>
    </aside>
  )
}
