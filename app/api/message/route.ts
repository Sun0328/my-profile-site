import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET: get all messages
export async function GET() {
    const messages = await prisma.message.findMany();

    // BigInt to string
    const serialized = messages.map((message) => ({
        ...message,
        id: message.id.toString(),
    }));

    return NextResponse.json(serialized);
}

// POST: create a new message
export async function POST(request: Request) {
    const { content, sender, sender_avatar } = await request.json();

    const message = await prisma.message.create({
        data: { content, sender, sender_avatar },
    });

    // BigInt to string
    const serialized = {
        ...message,
        id: message.id.toString(),
    };

    return NextResponse.json(serialized, { status: 201 });
}