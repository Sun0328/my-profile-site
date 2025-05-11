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

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }  
) {
  const { id } = await params

  try {
    // check if the blog exists
    const blog = await prisma.blog.findUnique({
      where: { id: BigInt(id) }
    })

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    // delete the blog
    await prisma.blog.delete({
      where: { id: BigInt(id) }
    })

    return NextResponse.json({ message: 'Blog deleted successfully' })
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    )
  }
}