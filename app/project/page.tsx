import ProjectList from "@/components/ProjectList";
import FloatingContent from "@/components/animations/FloatingContent";
import CodeIcon from '@mui/icons-material/Code';

export default function Project() {
    return (
        <div className="mx-auto px-6 mb-6">
            <FloatingContent>
                <div className="flex items-center gap-2 my-6 pl-6 border-l-2 border-[#4F46E5]">
                <h2 className="text-3xl text-gray-300 mr-2">Projects</h2>
                <CodeIcon className="text-3xl text-gray-300" />
                </div>
                <ProjectList />
            </FloatingContent>
        </div>
    );
  }
  