'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, FileText, Users, LogOut, User } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Blog Posts', href: '/admin/blog', icon: FileText, exact: false },
    { name: 'Users', href: '/admin/users', icon: Users, exact: false },
    { name: 'My Profile', href: '/admin/profile', icon: User, exact: true },
  ]

  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href
    }
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <aside className="w-64 bg-primary text-white min-h-screen flex flex-col shadow-xl sticky top-0">
      <div className="p-6 pb-5 border-b border-white/10">
        <h2 className="text-2xl font-heading font-bold">Admin Panel</h2>
      </div>

      <nav className="flex-1 px-4 py-5 space-y-1.5 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href, item.exact ?? false)

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200',
                active
                  ? 'bg-white/15 text-white shadow-sm font-medium'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 pt-3 border-t border-white/10">
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-white/75 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </form>
      </div>
    </aside>
  )
}
