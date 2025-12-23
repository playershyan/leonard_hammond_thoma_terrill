import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth/session'

export async function GET() {
  try {
    const session = await getSession()

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    return NextResponse.json({
      id: session.userId,
      username: session.username,
    })
  } catch (error) {
    console.error('Error fetching current user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
