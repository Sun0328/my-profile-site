'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ProjectFormProps {
  onSubmit: () => void;
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '/icons/react-svgrepo-com.svg', // 默认图标
    link: 'https://github.com/Sun0328',
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewIcon, setPreviewIcon] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    try {
      // 如果有预览图标，说明用户上传了新图标
      if (previewIcon) {
        // TODO: 这里需要实现文件上传到服务器的逻辑
        // 暂时使用预览图标的 base64 数据
        formData.icon = previewIcon;
      }

      const response = await fetch('/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit project');
      }

      onSubmit();
    } catch (error) {
      console.error('Error submitting project:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit project');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 检查文件类型
    if (!file.name.endsWith('.svg')) {
      setError('Please upload an SVG file');
      return;
    }

    // 读取文件并创建预览
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        setPreviewIcon(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="project-form">
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500 rounded text-red-500 text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="icon" className="block text-sm font-medium text-gray-300 mb-1">
          Project Icon (SVG only)
        </label>
        <div className="space-y-2">
          <input
            type="file"
            id="icon"
            name="icon"
            accept=".svg"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
            disabled={isSubmitting}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            Choose SVG File
          </button>
          {previewIcon && (
            <div className="mt-2 p-2 border border-gray-600 rounded-md">
              <div className="text-sm text-gray-300 mb-1">Preview:</div>
              <div className="w-8 h-8 mx-auto">
                <Image
                  src={previewIcon}
                  alt="Icon preview"
                  width={32}
                  height={32}
                  className="mx-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="link" className="block text-sm font-medium text-gray-300 mb-1">
          Project Link (optional)
        </label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
} 