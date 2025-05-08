import React from 'react'
import { Navbar } from './Navbar'
import { Avatar } from './Avatar'
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
  return (
    <header className="grid w-full grid-flow-col grid-cols-3 py-6">
      
      {/* Avatar */}
      <div className="flex items-center justify-center">
        <Avatar />
      </div>      

      {/* Navbar buttons */}
      <div className="flex items-center justify-center">
        <Navbar />
      </div>

      {/* GitHub link */}
      <div className="flex items-center justify-end">
        <Link
          href="https://github.com/Sun0328/my-profile-site"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full"
        >
          <GitHubIcon />
        </Link>
      </div>
    </header>
  )
}
