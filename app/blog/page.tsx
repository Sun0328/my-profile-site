// app/blog/page.tsx
import BlogList from '@/components/BlogList';
import FloatingContent from "@/components/animations/FloatingContent";

export default function BlogPage() {
  return (
    <div className="mx-auto px-6 mb-6">
      <FloatingContent>
        <div className="text-3xl my-6">Blogs</div>
        <BlogList />
      </FloatingContent>
    </div>
  );
}
