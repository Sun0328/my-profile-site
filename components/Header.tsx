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
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Header = () => {

  const { user } = useUser();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="w-full py-2 mt-2">
      {/* Mobile layout: two rows */}
      <div className="block lg:hidden px-4">
        {/* Nav bar - centered on mobile */}
        <div className="flex justify-center items-center w-full">
          <div className="scale-65">
            <Navbar />
          </div>
        </div>
        
        {/* Avatar and Auth on the same row */}
        <div className="flex justify-between items-center w-full">
          {/* Avatar - left side */}
          <div className="scale-75">
            <Link href="/">
              <motion.div
                animate={{
                  y: isHomePage ? 20 : 0,
                  scale: isHomePage ? 1.2 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.5
                }}
                style={{
                  cursor: "pointer",
                  display: "inline-block"
                }}
              >
                <Avatar />
              </motion.div>
            </Link>
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
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between mt-2">
        {/* Avatar - left */}
        <Link href="/">
          <motion.div
            animate={{
              y: isHomePage ? 20 : 0,
              scale: isHomePage ? 1.2 : 1,
            }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 1.0
            }}
            style={{
              cursor: "pointer",
              display: "inline-block",
              marginBottom: isHomePage ? "1rem" : "0"
            }}
          >
            <Avatar />
          </motion.div>
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
