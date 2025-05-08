"use client";

import Link from "next/link";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { BlogMetadata } from "@/lib/blog";

interface BlogsProps {
  blogs: (BlogMetadata & { slug: string })[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {blogs.map((blog) => (
        <Card
          key={blog.slug}
          sx={{
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(79, 70, 229, 0.4)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#fff",
            fontFamily: "Inter, ui-sans-serif, system-ui",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1, color: "#4F46E5" }}>
              <Link href={`/blog/${blog.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                {blog.title}
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {blog.publishedAt}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Blogs;
