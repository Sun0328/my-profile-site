'use client';

import BlogDetail from "@/components/BlogDetail";
import FloatingContent from '@/components/animations/FloatingContent';

export default function BlogDetailPage() {

  return (
    <FloatingContent>
      <BlogDetail />
    </FloatingContent>
  );
}
