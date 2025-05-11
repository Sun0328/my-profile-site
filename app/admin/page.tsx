'use client';

import { useState } from 'react';
import { useAdminData } from '@/lib/hooks/use-admin-data';
import { Modal } from '@/components/ui/modal';
import { BlogForm } from '@/components/admin/blog-form';
import { ProjectForm } from '@/components/admin/project-form';
import { Plus, Trash2 } from 'lucide-react';
import handleBlogDelete from '@/components/admin/blog-delete';
import handleProjectDelete from '@/components/admin/project-delete';

export default function AdminPage() {
  const { blogs, projects, refetch } = useAdminData();
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleBlogSubmit = async () => {
    await refetch(); // ensure the data is refreshed before closing the modal
    setIsBlogModalOpen(false);
  };

  const handleProjectSubmit = async () => {
    await refetch();
    setIsProjectModalOpen(false);
  };
  
  const onBlogDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const result = await handleBlogDelete(id);
      if (result.success) {
        await refetch();
      } else {
        alert(result.error || 'Failed to delete blog');
      }
    }
  };

  const onProjectDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const result = await handleProjectDelete(id);
      if (result.success) {
        await refetch();
      } else {
        alert(result.error || 'Failed to delete project');
      }
    }
  };

  return (
    <div className="flex flex-col items-start justify-start min-h-screen text-white m-10">
      <h1 className="text-3xl mb-8 pl-4 border-l-2 border-[#4F46E5]">Admin Panel</h1>
      
      {/* Blogs Section */}
      <div className="w-full mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Blogs</h2>
          <button
            onClick={() => setIsBlogModalOpen(true)}
            className="flex items-center px-4 py-2 bg-[#4F46E5] text-white rounded cursor-pointer hover:bg-[#4F46E5]/80 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Blog
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[200px]">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[150px]">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[300px]">Content</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[100px]">Photo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[120px]">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[100px]">ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider w-[80px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 max-w-[200px] truncate" title={blog.title}>{blog.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{blog.author}</td>
                  <td className="px-6 py-4 max-w-[300px] truncate" title={blog.content}>{blog.content}</td>
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
                  <td className="px-6 py-4 whitespace-nowrap text-gray-400">{blog.id}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onBlogDelete(blog.id)}
                      className="text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                      title="Delete blog"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
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
            className="flex items-center px-4 py-2 bg-[#4F46E5] text-white rounded cursor-pointer hover:bg-[#4F46E5]/80 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Project
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[200px]">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[300px]">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[100px]">Icon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[120px]">Link</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[120px]">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[100px]">ID</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider w-[80px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 max-w-[200px] truncate" title={project.title}>{project.title}</td>
                  <td className="px-6 py-4 max-w-[300px] truncate" title={project.description}>{project.description}</td>
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
                  <td className="px-6 py-4 whitespace-nowrap text-gray-400">{project.id}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onProjectDelete(project.id)}
                      className="text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                      title="Delete project"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
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
