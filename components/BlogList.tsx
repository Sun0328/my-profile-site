'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  author: string;
  photo?: string;
  content: string;
  created_at: string;
}

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
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <img src={blog.photo || ''} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500">
              By {blog.author} · {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
