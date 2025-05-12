'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import type { Blog } from '@/types/blog';
import FloatingContent from '@/components/animations/FloatingContent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const fetcher = (url: string) =>
  fetch(url).then(res => {
    if (!res.ok) throw new Error('Blog not found');
    return res.json();
  });

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: blog, error } = useSWR<Blog>(
    slug ? `/api/blog/${slug}` : null,
    fetcher,
    {
      dedupingInterval: 60_000,
      revalidateOnFocus: false,
    }
  );

  const [htmlContent, setHtmlContent] = useState<string>('');

  // Convert Markdown to HTML whenever blog.content changes
  useEffect(() => {
    if (!blog?.content) return;
    (async () => {
      const processed = await remark().use(html).process(blog.content);
      setHtmlContent(processed.toString());
    })();
  }, [blog?.content]);

  if (error) return <p className="text-red-500 px-4">Failed to load blog</p>;
  if (!blog) return <p className="px-4 text-gray-500">Loading...</p>;

  return (
    <FloatingContent>
      <div className="max-w-3xl mx-auto pt-5 pb-10 px-4 text-[#E5E7EB]">
        <div className="flex items-center mb-4">
          <Link href="/blog" prefetch>
            <button className="flex items-center bg-gray-600/30 px-4 py-2 rounded-md hover:bg-gray-600/50 transition-all duration-200 ease-in-out">
              <ArrowBackIosIcon />
              <span className="ml-1">Back</span>
            </button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(blog.created_at).toLocaleDateString()} · By {blog.author}
        </p>

        {blog.photo && (
          <img
            src={blog.photo}
            alt={blog.title}
            className="rounded-lg mb-6 w-full object-cover"
          />
        )}

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </FloatingContent>
  );
}
