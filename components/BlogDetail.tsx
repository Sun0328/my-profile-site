'use client';

import { useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Link from 'next/link';
import type { Blog } from '@/types/blog';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LoadingThreeDotsJumping from '@/components/animations/LoadingThreeDotsJumping';
import { convertMarkdownToHtml } from '@/lib/post';
import styles from './BlogDetail.module.css';

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

    // scroll animation
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        setScrollProgress(progress);
        
        // Show scroll to top button when scrolled past 20%
        setShowScrollTop(progress > 0.2);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

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
        <div className="max-w-3xl mx-auto pt-5 pb-10 px-4 text-[#E5E7EB] overflow-hidden">
          <div
            id="scroll-indicator"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: `${scrollProgress * 100}%`,
                height: 6,
                backgroundColor: "#4F46E5",
                zIndex: 9999,
                transition: "width 0.1s ease-out",
            }}
          />
          
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
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          
          {/* Scroll to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#4F46E5] cursor-pointer hover:bg-[#6366F1] text-white p-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
              style={{
                animation: 'fadeInUp 0.3s ease-out',
                zIndex: 99999,
                boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          )}
        </div>
    );
  }