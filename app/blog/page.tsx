// app/blog/page.tsx
import BlogList from '@/components/BlogList';

export default function BlogPage() {
  return (
    <div className="w-full py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <BlogList />
    </div>
  );
}
