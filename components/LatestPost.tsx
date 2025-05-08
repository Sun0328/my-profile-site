"use client";

import BlogList from "@/components/BlogList";

export default function LatestPost() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
      <BlogList />
    </div>
  );
}
