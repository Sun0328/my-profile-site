'use client'

import { useState, useCallback, useEffect } from 'react'
import FloatingContent from "@/components/animations/FloatingContent";
import type { Message } from '@/types/message'
import MessageInput from "@/components/MessageInput";
import MessageList from "@/components/messageList";

export default function Message() {
    const [messages, setMessages] = useState<Message[]>([])

    const fetchMessages = useCallback(async () => {
        const res = await fetch('/api/message')
        const data = await res.json()
        setMessages(data)
    }, [])

    useEffect(() => {
        fetchMessages()
    }, [fetchMessages])

    return (
        <div className="mx-auto px-6 mb-6">
            <FloatingContent>
                <div className="text-3xl my-6">Message Board</div>
                <div className="text-xl my-6">Feel free to leave a message for me!</div>
                <MessageInput onSent={fetchMessages}/>
                <MessageList messages={messages}/>
            </FloatingContent>
        </div>
    );
}
  