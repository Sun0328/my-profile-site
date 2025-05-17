'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Link from 'next/link';
import type { Blog } from '@/types/blog';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LoadingThreeDotsJumping from '@/components/animations/LoadingThreeDotsJumping';
import { convertMarkdownToHtml } from '@/lib/post';

// fetcher
const fetcher = (url: string) =>
    fetch(url).then(res => {
      if (!res.ok) throw new Error('Blog not found');
      return res.json();
    });

export default function BlogDetail() {
    // get slug from url
    const { slug } = useParams<{ slug: string }>();
    const [contentHtml, setContentHtml] = useState<string>('');

    // get blog from api
    const { data: blog, error } = useSWR<Blog>(
      slug ? `/api/blog/${slug}` : null,
      fetcher,
      {
        dedupingInterval: 60_000,
        revalidateOnFocus: false,
      }
    );

    // markdown to html
    useEffect(() => {
      if (!blog?.content) return;
  
      convertMarkdownToHtml(blog.content).then(result => {
        setContentHtml(result);
      }).catch(console.error);
    }, [blog]);
  
    // loading
    if (error) return <p className="text-red-500 px-4">Failed to load blog</p>;
    if (!blog) return <LoadingThreeDotsJumping />;

    return (
        <div className="max-w-3xl mx-auto pt-5 pb-10 px-4 text-[#E5E7EB]">
          <div className="flex items-center mb-4">
            <Link href="/blog" prefetch>
              <button className="flex items-center bg-gray-600/30 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600/50 transition-all duration-200 ease-in-out">
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
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
    );
  }