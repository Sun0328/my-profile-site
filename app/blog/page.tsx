// app/blog/page.tsx
import BlogList from '@/components/BlogList';

export default function BlogPage() {
  return (
    <div className="mx-auto px-4">
      <div className="text-3xl my-6">Blogs</div>
      <BlogList />
    </div>
  );
}
