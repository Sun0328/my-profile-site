import Typewriter from "./animations/Typewriter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";

const aboutJSON = `{
  \n  "name": "Fiona Sun",
  "MBTI": "infp",
  "role": "IT New Grad",
  "motto": "Make Something Wonderful!"
}`;

const iconStyle = {
  color: "#F9EBB2",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  }
};

export default function Info() {
  return (
    <div className="grid w-full grid-cols-[60%_40%] pb-6 border-b-1 border-gray-500">
      {/* left: 60% – stacked in one column */}
      <div className="flex flex-col items-start justify-center space-y-4">
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

        <p
          className="text-xl tracking-wide leading-relaxed my-6"
          style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
        >
          I'm a master student at University of Auckland majoring in Information Technology. 
          Passionate about developing applications that merge purpose with aesthetics.
        </p>

        {/* 3 contact icons in a row */}
        <div className='flex items-center justify-start space-x-6'>
          <Link
            href="https://www.linkedin.com/in/fiona-sun-424858270"
          >
            <LinkedInIcon sx={iconStyle} />
          </Link>
          <Link
            href="https://github.com/Sun0328"
          >
            <GitHubIcon sx={iconStyle} />
          </Link>
          <a
            href="mailto:fiona.sun328@gmail.com"
          >
            <EmailIcon sx={iconStyle} />
          </a>
        </div>
      </div>

      {/* right: 40% */}
      <div className="flex items-center justify-center p-6">
      </div>
    </div>
  );
}
