'use client';

import { useState } from 'react';
import { useAdminData } from '@/lib/hooks/use-admin-data';
import { Modal } from '@/components/ui/modal';
import { BlogForm } from '@/components/admin/blog-form';
import { ProjectForm } from '@/components/admin/project-form';
import { Plus } from 'lucide-react';

export default function AdminPage() {
  const { blogs, projects, refetch } = useAdminData();
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleBlogSubmit = async () => {
    await refetch(); // 确保在关闭模态框之前刷新数据
    setIsBlogModalOpen(false);
  };

  const handleProjectSubmit = async () => {
    await refetch(); // 确保在关闭模态框之前刷新数据
    setIsProjectModalOpen(false);
  };
  
  return (
    <div className="flex flex-col items-start justify-start min-h-screen text-white m-10">
      <h1 className="text-3xl mb-8">Admin Panel</h1>
      
      {/* Blogs Section */}
      <div className="w-full mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Blogs</h2>
          <button
            onClick={() => setIsBlogModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Blog
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Content</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Photo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{blog.author}</td>
                  <td className="px-6 py-4 max-w-md truncate">{blog.content}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {blog.photo ? (
                      <a href={blog.photo} target="_blank" rel="noopener noreferrer" 
                         className="text-blue-400 hover:text-blue-300">
                        View
                      </a>
                    ) : (
                      <span className="text-gray-500">No photo</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Projects</h2>
          <button
            onClick={() => setIsProjectModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Project
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Icon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Link</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                  <td className="px-6 py-4 max-w-md truncate">{project.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.icon ? (
                      <a href={project.icon} target="_blank" rel="noopener noreferrer" 
                         className="text-blue-400 hover:text-blue-300">
                        View
                      </a>
                    ) : (
                      <span className="text-gray-500">No icon</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="text-blue-400 hover:text-blue-300">
                        Visit
                      </a>
                    ) : (
                      <span className="text-gray-500">No link</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(project.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Blog Modal */}
      <Modal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        title="Add New Blog"
      >
        <BlogForm onSubmit={handleBlogSubmit} />
      </Modal>

      {/* Project Modal */}
      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        title="Add New Project"
      >
        <ProjectForm onSubmit={handleProjectSubmit} />
      </Modal>
    </div>
  );
}
