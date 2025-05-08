// app/api/blog/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params; // ✅ 不需要 await

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
  }

  const blog = await prisma.blog.findUnique({
    where: { id: BigInt(id) },
  });

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json({
    ...blog,
    id: blog.id.toString(),
  });
}
