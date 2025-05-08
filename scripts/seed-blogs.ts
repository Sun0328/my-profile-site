const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // 添加第一条博客
    const blog1 = await prisma.blog.create({
      data: {
        title: "Getting Started with Markdown in React",
        content: "This is my first blog post, introducing...",
        author: "Fiona Sun",
        photo: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=4515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    });
    
    // 添加第二条博客
    const blog2 = await prisma.blog.create({
      data: {
        title: "10 Practical Tips for Optimizing Web Performance",
        content: "This is my second blog post, discussing...",
        author: "Fiona Sun",
        photo: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=5586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    });
    
    console.log('Successfully added two blog posts:');
    console.log(blog1, blog2);
  } catch (error) {
    console.error('Failed to add data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 