import { Sidebar } from '@/components/admin/Sidebar'
import { requireAuth } from '@/lib/auth/validate'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAuth()

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-background-gray min-h-screen">{children}</main>
    </div>
  )
}
