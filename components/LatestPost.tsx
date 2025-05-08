"use client";

import BlogList from "@/components/BlogList";
import Image from "next/image";

export default function LatestPost() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Image
          src="/icons/file.svg"
          alt="Tech Icon"
          width={20}
          height={20}
        />
        <h2 className="text-3xl text-gray-300 ml-2">Latest Posts</h2>
      </div>
      <div className="flex flex-col mr-6">
        <BlogList />
      </div>
    </div>
  );
}
