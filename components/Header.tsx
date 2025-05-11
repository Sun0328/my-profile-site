import React from 'react'
import { Navbar } from './Navbar'
import { Avatar } from './Avatar'
import AdminPanel from './AdminPanel'
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs'

export const Header = () => {

  const { user } = useUser();

  return (
    <header className="w-full py-4 mt-2">
      {/* Mobile layout: two rows */}
      <div className="block lg:hidden px-4">
        {/* Nav bar - centered on mobile */}
        <div className="flex justify-center items-center w-full mb-4">
          <div className="scale-70">
            <Navbar />
          </div>
        </div>
        
        {/* Avatar and Auth on the same row */}
        <div className="flex justify-between items-center w-full">
          {/* Avatar - left side */}
          <div className="scale-75">
            <Avatar />
          </div>
          
          {/* Github and Auth buttons - right side */}
          <div className="flex items-center justify-end space-x-3">

            <Link href="https://github.com/Sun0328/my-profile-site" target="_blank" rel="noopener noreferrer">
              <div className="text-2xl text-white hover:text-gray-400 transition-transform duration-200 hover:scale-110">
                <GitHubIcon fontSize="inherit"/>
              </div>
            </Link>

            <SignedOut>
              <SignInButton mode="modal">
                <div
                  className="
                    cursor-pointer 
                    text-3xl
                    text-white
                    transition-transform
                    duration-200
                    ease-in-out 
                    hover:scale-110
                    hover:text-gray-400
                    p-1
                  "
                >
                  <PersonAddAltIcon fontSize="inherit"/>
                </div>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
              <div className="text-2xl text-white hover:text-gray-400 transition-transform duration-200 hover:scale-110">
                {user?.publicMetadata.role === "admin" && <AdminPanel />}
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
      
      {/* Desktop layout: single row with three components */}
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between px-4 lg:px-8">
        {/* Avatar - left */}
        <Link href="/">
          <Avatar />
        </Link>
        
        {/* Navbar - center */}
        <div>
          <Navbar />
        </div>
        
        {/* Auth - right */}
        <div className="flex items-center justify-end space-x-6">
          <div className="text-3xl text-white cursor-pointer hover:text-gray-400 transition-transform duration-200 hover:scale-110">
          </div>

          <Link href="https://github.com/Sun0328/my-profile-site" target="_blank" rel="noopener noreferrer">
            <div className="text-3xl text-white hover:text-gray-400 transition-transform duration-200 hover:scale-110">
              <GitHubIcon fontSize="inherit"/>
            </div>
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <div
                className="
                  cursor-pointer 
                  text-4xl
                  text-white
                  transition-transform
                  duration-200
                  ease-in-out 
                  hover:scale-110
                  hover:text-gray-400
                  p-1
                "
              >
                <PersonAddAltIcon fontSize="inherit"/>
              </div>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
              <div className="text-2xl text-white hover:text-gray-400 transition-transform duration-200 hover:scale-110">
                {user?.publicMetadata.role === "admin" && <AdminPanel />}
              </div>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
