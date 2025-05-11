// app/api/blogs/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { Blog } from '@/types/blog';

const prisma = new PrismaClient();

// GET: get all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { created_at: 'desc' },
    });
  
    // BigInt to string
    const serialized = blogs.map((blog) => ({
      ...blog,
      id: blog.id.toString(),
    }));
  
    return NextResponse.json(serialized);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST: create a new blog
export async function POST(request: Request) {
  try {
    // 获取请求体中的数据
    const data = await request.json();
    
    // 验证必填字段
    if (!data.title || !data.author || !data.content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 创建新博客
    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        author: data.author,
        content: data.content,
        photo: data.photo || null,
      },
    });

    // 返回创建成功的博客数据
    return NextResponse.json({
      ...blog,
      id: blog.id.toString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}