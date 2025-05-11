'use client';

import { useLoading } from '@/lib/loading-context';
import { Loader2 } from 'lucide-react';

export function Loading() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="rounded-lg bg-gray-800 p-4 shadow-lg">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    </div>
  );
} 