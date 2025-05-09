'use client';

import { useEffect, useState, useCallback } from 'react';
import type { Message } from '@/types/message';
import { formatRelativeTime } from '@/lib/time';    

interface Props { messages: Message[] }

export default function messageList({ messages }: Props) {

  // sort messages by created_at (newest to oldest)
  const sorted = [...messages].sort((a, b) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-8 justify-center items-start">
        {sorted.map((message) => (
            <div key={message.id} className="border-l-2 border-yellow-700 pl-6 my-2">
                <div className='flex flex-row items-center gap-4 mb-4'>
                    <img src={message.sender_avatar} alt="user-avatar" className='w-8 h-8 rounded-full' />
                    <div className="text-sm text-[#E5E7EB]">
                        {message.sender}
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatRelativeTime(message.created_at)}
                    </div>
                </div>
                <div className='mt-2 text-gray-300'>
                  {message.content}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}