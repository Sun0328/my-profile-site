// app/api/blogs/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET: get all projects
export async function GET() {
    const projects = await prisma.project.findMany({
      orderBy: { created_at: 'desc' },
    });
  
    // BigInt to string
    const serialized = projects.map((project) => ({
      ...project,
      id: project.id.toString(),
    }));
  
    return NextResponse.json(serialized);
}