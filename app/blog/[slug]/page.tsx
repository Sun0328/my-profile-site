'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import type { Blog } from '@/types/blog';

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${params.slug}`);
        if (!res.ok) throw new Error('Blog not found');
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError('Failed to load blog');
      }
    };

    fetchBlog();
  }, [params.slug]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500 my-4">
        {new Date(blog.created_at).toLocaleDateString()} · By {blog.author}
      </p>
      {blog.photo && (
        <img src={blog.photo} alt={blog.title} className="rounded-lg mb-6 w-full" />
      )}
      <article className="prose max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </div>
  );
}
