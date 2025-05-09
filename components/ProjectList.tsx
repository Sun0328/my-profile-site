'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Project } from '@/types/project';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/project');
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project) => (
          <Link 
            href={`${project.link}`} 
            key={project.id} 
            className="w-full max-w-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div 
              className="
              rounded-lg border border-indigo-500/40    
              hover:border-[#4F46E5]          
              transition-all duration-200 ease-in-out
              hover:shadow-xl hover:scale-105
            "
            >
              <div className="flex items-center my-4 ml-4">
                {project.icon && (
                  <div className="mr-3">
                    <Image 
                      src={project.icon} 
                      alt={`${project.title} icon`} 
                      width={40} 
                      height={40} 
                      className="rounded-md"
                    />
                  </div>
                )}
                <div className="text-xl font-semibold">{project.title}</div>
              </div>

              <p className="text-sm text-gray-400 mb-6 ml-4">
                {new Date(project.created_at).toLocaleDateString()}
              </p>
              
              <div className="text-gray-300 text-sm flex-grow ml-4 mb-4">
                {project.description}
              </div>

              <div className="text-gray-300 text-sm flex flex-row items-center ml-4 my-4 space-x-2">
                Github: 
                <div className="ml-2">
                    <OpenInNewIcon color="primary"/>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
