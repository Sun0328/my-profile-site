'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Blog {
  id: string;
  title: string;
  author: string;
  photo?: string;
  content: string;
  created_at: string;
}

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${params.id}`);
        if (!res.ok) throw new Error('Blog not found');
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError('Failed to load blog');
      }
    };

    fetchBlog();
  }, [params.id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <p className="text-sm text-gray-500 mb-2">
        {new Date(blog.created_at).toLocaleDateString()} · By {blog.author}
      </p>
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
      {blog.photo && (
        <img src={blog.photo} alt={blog.title} className="rounded-lg mb-6 w-full" />
      )}
      <article className="prose max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </div>
  );
}
