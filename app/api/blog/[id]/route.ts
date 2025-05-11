// app/api/blog/[id]/route.ts
import { NextResponse } from 'next/server';
import type { blog } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { created_at: 'desc' },
    });
    const serialized = blogs.map((b: blog) => ({ ...b, id: b.id.toString() }));
    const blog = serialized.find((b: { id: string }) => b.id === id);
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (e) {
    console.error('Error fetching blog:', e);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: BigInt(id) },
    });
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    await prisma.blog.delete({ where: { id: BigInt(id) } });
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (e) {
    console.error('Error deleting blog:', e);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
