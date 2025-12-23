import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db/client'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { hashPassword } from '@/lib/auth'

// GET /api/users/[id] - Get single user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const [user] = await db.select().from(users).where(eq(users.id, params.id)).limit(1)

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Don't send password hash
    const { passwordHash, ...userWithoutPassword } = user
    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 })
  }
}

// PUT /api/users/[id] - Update user
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Check if user exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.id, params.id))
      .limit(1)

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Validation
    if (username && (username.length < 3 || username.length > 50)) {
      return NextResponse.json(
        { error: 'Username must be between 3 and 50 characters' },
        { status: 400 }
      )
    }

    if (password && password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    // Check if new username already exists (if username is being changed)
    if (username && username !== existingUser.username) {
      const [duplicateUser] = await db
        .select()
        .from(users)
        .where(eq(users.username, username))
        .limit(1)

      if (duplicateUser) {
        return NextResponse.json(
          { error: 'Username already exists' },
          { status: 400 }
        )
      }
    }

    // Build update object
    const updateData: any = {
      updatedAt: new Date(),
    }

    if (username) {
      updateData.username = username
    }

    if (password) {
      updateData.passwordHash = await hashPassword(password)
    }

    // Update user
    const [updatedUser] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, params.id))
      .returning()

    return NextResponse.json({
      success: true,
      user: { id: updatedUser.id, username: updatedUser.username },
    })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

// DELETE /api/users/[id] - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if user exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.id, params.id))
      .limit(1)

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check if this is the last user
    const allUsers = await db.select().from(users)
    if (allUsers.length <= 1) {
      return NextResponse.json(
        { error: 'Cannot delete the last user' },
        { status: 400 }
      )
    }

    // Delete user
    await db.delete(users).where(eq(users.id, params.id))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}
