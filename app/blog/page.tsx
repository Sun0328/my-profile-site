// app/blog/page.tsx
import BlogList from '@/components/BlogList';
import FloatingContent from "@/components/animations/FloatingContent";
import ArticleIcon from '@mui/icons-material/Article';

export default function BlogPage() {
  return (
    <div className="mx-auto px-6 mb-6">
      <FloatingContent>
        <div className="flex items-center gap-2 my-6">
          <ArticleIcon className="text-3xl text-gray-300" />
          <h2 className="text-3xl text-gray-300">Blogs</h2>
        </div>
        <div className="flex flex-col w-full md:w-[80%]">
          <BlogList />
        </div>
      </FloatingContent>
    </div>
  );
}
