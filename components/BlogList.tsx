'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Box } from '@mui/material';
import type { Blog } from '@/types/blog';

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div 
          className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition transform hover:scale-103 duration-200" 
          style={{ borderColor: 'rgba(79, 70, 229, 0.4)' }}
          >
            <img src={blog.photo || ''} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2" style={{ color: '#4F46E5' }}>{blog.title}</h2>
            <p className="text-sm text-gray-500">
              By {blog.author} · {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
