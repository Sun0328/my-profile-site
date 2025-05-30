# My Profile Site

A modern personal portfolio website built with Next.js, featuring a blog system, project showcase, and message board.

![Home](public/screenshot/home.png)

## Features

- 🎨 Modern and responsive design
![Home](public/screenshot/home-mobile.png)
- 📝 Blog system
![Home](public/screenshot/blog.png)
- 🚀 Project showcase with GitHub integration
![Home](public/screenshot/project.png)
- 💬 Interactive message board
![Home](public/screenshot/message.png)
- ⚙️ Admin panel for adding and deleting data (restricted to admin only)
![Admin Panel](public/screenshot/admin.png)
- 🔐 User authentication with Clerk
- 📱 Mobile-friendly interface

## Tech Stack

- **Framework**: Next.js 
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**:
  - Material-UI (MUI)
  - Lucide
- **Authentication**: Clerk
- **Database**: Prisma & Supabase
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/my-profile-site.git
cd my-profile-site
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=your_database_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Other environment variables...
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your site.

## Project Structure

```
my-profile-site/
├── app/
│   ├── api/               # API routes                 
│   ├── admin/             # Admin page
│   ├── blog/              # Blog pages
│   ├── project/           # Project page
│   ├── message/           # Message board
│   └── layout.tsx         # Root layout: Header + (main) + Footer
│   └── page.tsx           # Main Wrapper
├── components/
│   ├── admin/             # Admin components           
│   ├── animations/        # Animation components
│   └── ui/                # UI components
├── lib/                   # Utility functions and hooks
├── middleware/            # For clerk
├── prisma/                # Database schema and migrations
├── public/                # Static assets（icons, screenshots, images, avatar）
└── types/                 # TypeScript type definitions
```

## Key Features Implementation

### Blog System

- Create, read, update, and delete blog posts
- Image upload support
- Responsive blog list and detail views

### Project Showcase

- Display projects with icons and descriptions
- GitHub integration
- Responsive grid layout
- Interactive hover effects

### Message Board

- Real-time message updates
- User authentication required for posting
- Responsive message list
- Admin moderation capabilities

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
