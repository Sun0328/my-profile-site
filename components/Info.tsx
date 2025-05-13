'use client';

import Typewriter from "./animations/Typewriter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import { motion } from "framer-motion";

const aboutJSON = `{
  \n  "name": "Fiona Sun",
  "MBTI": "infp",
  "role": "IT New Grad",
  "motto": "Make Something Wonderful!"
}`;

const iconStyle = {
  color: "#E5E7EB",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  }
};

export default function Info() {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-[60%_40%] pb-6 border-b-1 border-gray-500">
      <div className="flex flex-col items-start justify-center space-y-4 w-full">
        <div className='text-4xl font-bold my-8' style={{ 
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          letterSpacing: "0.5px",
          background: "linear-gradient(135deg, #4F46E5 0%, #A5B4FC 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 10px rgba(79, 70, 229, 0.3)",
        }}>
          Hi, I'm Fiona.
        </div>
        
        <Typewriter text={aboutJSON} speed={40} />

        <div className="relative pl-8 my-4">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-0.5 bg-[#4F46E5]"
            style={{ borderRadius: 2 }}
          />
          <p
            className="text-xl text-[#E5E7EB] tracking-wide leading-relaxed my-6"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
          >
            I'm a master student at University of Auckland majoring in Information Technology. 
            Passionate about developing applications that merge purpose with aesthetics.
          </p>
        </div>
        
        {/* Social media contact icons */}
        <div className='flex items-center justify-start space-x-6'>
          <Link
            href="https://www.linkedin.com/in/fiona-sun-424858270"
            target="_blank" rel="noopener noreferrer"
          >
            <LinkedInIcon sx={iconStyle} />
          </Link>
          <Link
            href="https://github.com/Sun0328"
            target="_blank" rel="noopener noreferrer"
          >
            <GitHubIcon sx={iconStyle} />
          </Link>
          <a
            href="mailto:fiona.sun328@gmail.com"
            target="_blank" rel="noopener noreferrer"
          >
            <EmailIcon sx={iconStyle} />
          </a>
        </div>
      </div>

      {/* Right section - only visible on desktop */}
      <div className="hidden md:flex items-center justify-center p-6">
      </div>
    </div>
  );
}
