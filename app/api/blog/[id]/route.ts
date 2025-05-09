import type { NextRequest } from 'next/server'  
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) { 
    const id = (await params).id;
    
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: { created_at: 'desc' },
        }); 

        // BigInt to string
        const serialized = blogs.map((blog) => ({
            ...blog,
            id: blog.id.toString(),
        }));    

        const blog = serialized.find((blog) => blog.id === id);

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }   
        return NextResponse.json({
            ...blog,
            id: blog.id.toString(),
        });
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}