"use client";

import BlogList from "@/components/BlogList";

export default function LatestPost() {
  return (
    <div>
      <h2 className="text-3xl text-gray-700 mb-8">Latest Posts</h2>
      <div className="flex flex-col mr-6">
        <BlogList />
      </div>
    </div>
  );
}
