'use client';

import { useState, useEffect } from 'react';
import { useLoading } from '../loading-context';
import { Blog } from '@/types/blog';
import { Project } from '@/types/project';

export function useAdminData() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { showLoading, hideLoading } = useLoading();

  const fetchData = async () => {
    showLoading();
    try {
      const [blogsRes, projectsRes] = await Promise.all([
        fetch('/api/blog'),
        fetch('/api/project')
      ]);

      if (!blogsRes.ok || !projectsRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const blogsData = await blogsRes.json();
      const projectsData = await projectsRes.json();

      setBlogs(blogsData);
      setProjects(projectsData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { blogs, projects, error, refetch: fetchData };
} 