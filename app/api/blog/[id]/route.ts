import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: Request,                         
  { params }: { params: Promise<{ id: string }> }  
) {
  const { id } = await params              

  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { created_at: 'desc' },
    })

    const serialized = blogs.map((b) => ({
      ...b,
      id: b.id.toString(),
    }))

    const blog = serialized.find((b) => b.id === id)
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    return NextResponse.json(blog)
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}