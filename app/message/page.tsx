'use client'

import { useState, useCallback, useEffect } from 'react'
import FloatingContent from "@/components/animations/FloatingContent";
import type { Message } from '@/types/message'
import MessageInput from "@/components/MessageInput";
import SignOutBox from "@/components/SignOutBox";
import MessageList from "@/components/messageList";
import { SignedIn, SignedOut } from '@clerk/nextjs';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function Message() {
    const [messages, setMessages] = useState<Message[]>([])

    const fetchMessages = useCallback(async () => {
        try {
            const res = await fetch('/api/message')
            const data = await res.json()
            setMessages(data)
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }, [])

    useEffect(() => {
        fetchMessages()
    }, [fetchMessages])

    return (
        <div className="mx-auto px-6 mb-6">
            <FloatingContent>
                
                <div className="flex items-center gap-2 my-6 pl-6 border-l-2 border-[#4F46E5]">
                    <h2 className="text-3xl text-gray-300 mr-2">Message Board</h2>
                    <ChatBubbleOutlineIcon className="text-3xl text-gray-300" />
                </div>

                <div className="text-xl text-[#E5E7EB] my-6">Feel free to leave a message for me!</div>
                <SignedIn>  
                    <MessageInput onSent={fetchMessages}/>
                </SignedIn>
                <SignedOut>
                    <SignOutBox />
                </SignedOut>
                <MessageList messages={messages}/>

            </FloatingContent>
        </div>
    );
}
  