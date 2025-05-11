import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { Project } from '@/types/project';

const prisma = new PrismaClient();

// GET: get all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { created_at: 'desc' },
    });
  
    // BigInt to string
    const serialized = projects.map((project) => ({
      ...project,
      id: project.id.toString(),
    }));
  
    return NextResponse.json(serialized);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST: create a new project
export async function POST(request: Request) {
  try {
    // 获取请求体中的数据
    const data = await request.json();
    
    // 验证必填字段
    if (!data.title || !data.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 创建新项目
    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon || null,
        link: data.link || null,
      },
    });

    // 返回创建成功的项目数据
    return NextResponse.json({
      ...project,
      id: project.id.toString(),
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}