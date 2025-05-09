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
        <h2 className="text-3xl text-[#E5E7EB] ml-2">Latest Update</h2>
      </div>
      <div className="flex flex-col">
        <BlogList />
      </div>
    </div>
  );
}
