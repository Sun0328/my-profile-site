import React from 'react'
import { Navbar } from './Navbar'
import { Avatar } from './Avatar'
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

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

      {/* Auth buttons */}
      <div className="flex items-center justify-end mr-10">
        <SignedOut>
          <SignInButton mode="modal">
            <div
              className="
                cursor-pointer 
                text-3xl 
                transition-transform
                duration-200
                ease-in-out 
                hover:scale-110
                hover:text-gray-400
              "
            >
              {/* 让 Icon 跟着父容器的 font-size */}
              <PersonAddAltIcon fontSize="inherit" />
            </div>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}
