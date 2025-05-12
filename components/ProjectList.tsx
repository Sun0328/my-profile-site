'use client';

import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Project } from '@/types/project';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProjectList() {
  const { data: projects, error } = useSWR<Project[]>('/api/project', fetcher, {
    // 60 seconds
    dedupingInterval: 60_000,
    // don't revalidate on focus
    revalidateOnFocus: false,
  });

  if (error) {
    return <div className="text-red-400">Failed to load projects</div>;
  }
  if (!projects) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project) => (
          <Link 
            href={project.link || ''}
            key={project.id} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md"
          >
            <div 
              className="
                px-2 py-2 rounded-lg bg-gray-700/20
                border border-indigo-500/40    
                hover:border-indigo-600          
                transition-all duration-200 ease-in-out
                hover:shadow-xl hover:scale-105
                h-[280px] w-full flex flex-col
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
                <div className="text-xl text-[#E5E7EB]">{project.title}</div>
              </div>

              <p className="text-sm text-gray-400 mb-6 ml-4">
                {new Date(project.created_at).toLocaleDateString()}
              </p>
              
              <div className="text-gray-300 text-sm flex-grow ml-4 line-clamp-3 overflow-hidden">
                {project.description}
              </div>

              <div className="text-gray-300 text-sm flex items-center ml-4 mb-4 mt-auto space-x-2">
                Github: 
                <OpenInNewIcon color="primary" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
