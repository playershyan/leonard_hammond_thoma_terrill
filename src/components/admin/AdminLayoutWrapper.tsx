'use client'

import { usePathname } from 'next/navigation'
import { Sidebar } from './Sidebar'

interface AdminLayoutWrapperProps {
  children: React.ReactNode
}

export function AdminLayoutWrapper({ children }: AdminLayoutWrapperProps) {
  const pathname = usePathname()

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen bg-background-gray">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden min-h-screen">
        <div className="p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  )
}

