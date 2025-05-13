'use client';

import useSWR from 'swr';
import Link from 'next/link';
import LoadingThreeDotsJumping from '@/components/animations/LoadingThreeDotsJumping';
import type { Blog } from '@/types/blog';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function BlogList() {
  const { data: blogs, error } = useSWR<Blog[]>('/api/blog', fetcher, {
    // 60 seconds
    dedupingInterval: 60_000,
    // don't revalidate on focus
    revalidateOnFocus: false,
  });

  if (error) {
    return <div className="text-red-400">Failed to load blogs</div>;
  }
  if (!blogs) {
    return (
        <LoadingThreeDotsJumping />
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {blogs.map(blog => (
        <Link
          href={`/blog/${blog.id}`}
          key={blog.id}
          prefetch={true}
          className="
            block
            border border-indigo-500/40 
            rounded-lg p-4 shadow-lg bg-gray-800/30
            hover:border-indigo-600 hover:shadow-xl transform hover:scale-102
            transition-all duration-200 ease-in-out
          "
          style={{ borderColor: 'rgba(79, 70, 229, 0.4)' }}
        >
          <img
            src={blog.photo || '/default.jpg'}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-400">
            By {blog.author} · {new Date(blog.created_at).toLocaleDateString()}
          </p>
        </Link>
      ))}
    </div>
  );
}
