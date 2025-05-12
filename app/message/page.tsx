'use client'

import useSWR from 'swr'
import FloatingContent from "@/components/animations/FloatingContent"
import type { Message } from '@/types/message'
import MessageInput from "@/components/MessageInput"
import SignOutBox from "@/components/SignOutBox"
import MessageList from "@/components/messageList"
import { SignedIn, SignedOut } from '@clerk/nextjs'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Message() {
  const { data: messages, error, mutate } = useSWR<Message[]>(
    '/api/message',
    fetcher,
    {
      dedupingInterval: 60_000,   
      revalidateOnFocus: false,  
    }
  )

  if (error) {
    return <div className="text-red-400 px-6">Failed to load messages</div>
  }
  if (!messages) {
    return <div className="text-gray-500 px-6">Loading...</div>
  }

  return (
    <div className="mx-auto px-6 mb-6">
      <FloatingContent>
        <div className="flex items-center gap-2 my-6 pl-6 border-l-2 border-indigo-600">
          <h2 className="text-3xl text-gray-300 mr-2">Message Board</h2>
          <ChatBubbleOutlineIcon className="text-3xl text-gray-300" />
        </div>

        <div className="text-xl text-gray-200 my-6">
          Feel free to leave a message for me!
        </div>

        <SignedIn>
          <MessageInput onSent={() => mutate()} />
        </SignedIn>
        <SignedOut>
          <SignOutBox />
        </SignedOut>

        <MessageList messages={messages} />
      </FloatingContent>
    </div>
  )
}
