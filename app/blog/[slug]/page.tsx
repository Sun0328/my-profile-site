'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';
import Link from "next/link"
import type { Blog } from '@/types/blog';
import FloatingContent from '@/components/animations/FloatingContent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>(''); 
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

  // Use remark to convert markdown into HTML string
  useEffect(() => {
    if (!blog?.content) return;
    const convert = async () => {
      const processed = await remark().use(html).process(blog.content);
      setHtmlContent(processed.toString());
    };
    convert();

    console.log(htmlContent);
    
  }, [blog?.content]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <FloatingContent>
      <div className="max-w-3xl mx-auto pt-5 pb-10 px-4 text-[#E5E7EB]">
        
        <div className='flex justify-start items-center'>
          <Link href="/blog">
            <button className='
              bg-gray-600/30 px-4 py-2 mb-4 rounded-md 
              cursor-pointer hover:bg-gray-600/50 
              transition-all duration-200 ease-in-out
            '
            >
              <ArrowBackIosIcon />
              Back
            </button>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold">{blog.title}</h1>

        {/* Date and Author */}
        <p className="text-sm text-gray-500 my-4">
          {new Date(blog.created_at).toLocaleDateString()} · By {blog.author}
        </p>

        {/* Photo */}
        {blog.photo && (
          <img src={blog.photo} alt={blog.title} className="rounded-lg mb-6 w-full" />
        )}

        {/* Content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

      </div>
    </FloatingContent>
  );
}
