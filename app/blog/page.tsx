// app/blog/page.tsx
import BlogList from '@/components/BlogList';
import FloatingContent from "@/components/animations/FloatingContent";
import ArticleIcon from '@mui/icons-material/Article';

export default function BlogPage() {
  return (
    <div className="mx-auto mb-6">
      <FloatingContent>
        <div className="flex items-center gap-2 my-6 pl-6 border-l-2 border-[#4F46E5]">
          <h2 className="text-3xl text-gray-300 mr-2">Blogs</h2>
          <ArticleIcon className="text-3xl text-gray-300" />
        </div>
        <div className="flex flex-col w-full md:w-[80%]">
          <BlogList />
        </div>
      </FloatingContent>
    </div>
  );
}
