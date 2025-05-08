// app/api/blogs/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET: get all blogs
export async function GET() {
    const blogs = await prisma.blog.findMany({
      orderBy: { created_at: 'desc' },
    });
  
    // BigInt to string
    const serialized = blogs.map((blog) => ({
      ...blog,
      id: blog.id.toString(),
    }));
  
    return NextResponse.json(serialized);
}