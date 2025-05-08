import ProjectList from "@/components/ProjectList";
import FloatingContent from "@/components/animations/FloatingContent";

export default function Project() {
    return (
        <div className="mx-auto px-6 mb-6">
            <FloatingContent>
                <div className="text-3xl my-6">Projects</div>
                <ProjectList />
            </FloatingContent>
        </div>
    );
  }
  