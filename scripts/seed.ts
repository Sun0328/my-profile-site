// prisma/seed.ts
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Clear existing data
    await prisma.blog.deleteMany();
    // Due to TypeScript typing issues, use Prisma's arbitrary access method
    await prisma.project.deleteMany();

    // seed blogs
    await prisma.blog.createMany({
      data: [
        {
          title: "Getting Started with Markdown in React",
          content: `# Getting Started with Markdown in React

React developers often need to render markdown content in their applications. This post explores the best libraries and approaches for integrating markdown in your React projects.

## Popular Libraries

1. **react-markdown** - Simple and flexible
2. **markdown-to-jsx** - Powerful and customizable
3. **remark** - Extensible markdown processor

## Code Example

\`\`\`jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownRenderer({ content }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default MarkdownRenderer;
\`\`\`

Stay tuned for more React tips and tutorials!`,
          author: "Fiona Sun",
          photo: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=4515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          title: "10 Practical Tips for Optimizing Web Performance",
          content: `# 10 Practical Tips for Optimizing Web Performance

Web performance is crucial for user experience and SEO. Here are 10 practical tips to speed up your website.

## Frontend Optimization

1. **Minimize HTTP Requests** - Combine CSS and JavaScript files
2. **Optimize Images** - Compress and use modern formats like WebP
3. **Implement Lazy Loading** - Load images and components only when needed
4. **Use Browser Caching** - Set appropriate cache headers

## Backend Optimization

5. **Enable GZIP Compression** - Reduce file sizes during transfer
6. **Optimize Database Queries** - Index properly and avoid N+1 problems
7. **Implement CDN** - Serve static assets from edge locations

## Monitoring

8. **Use Performance Monitoring Tools** - Lighthouse, WebPageTest, etc.
9. **Set Performance Budgets** - Establish limits for page size and load time
10. **Continuous Testing** - Regularly test performance in your CI/CD pipeline

Remember, small improvements add up to create a significantly faster user experience!`,
          author: "Fiona Sun",
          photo: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=5586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    });

    // seed projects
    // Due to TypeScript typing issues, use Prisma's arbitrary access method
    await prisma.project.createMany({
      data: [
        {
          title: "fionaSun.me",
          icon: "/avatar/my-avatar.png",
          description: `My personal website built with Next.js, TypeScript, and Tailwind CSS.`,
          link: "https://github.com/Sun0328/my-profile-site"
        },
        {
          title: "Game API",
          icon: "/icons/dotnet-svgrepo-com.svg",
          description: `A RESTful API for game management built with ASP.NET Core.`,
          link: "https://github.com/Sun0328/dotnet01_basic"
        }
      ]
    });

    console.log('🎉 Seed completed!');
  } catch (error) {
    console.error('Seed failed:', error);
    throw error;
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });