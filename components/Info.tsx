import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";

export default function Info() {
  return (
    <div className="grid w-full grid-cols-[60%_40%] py-4 border-b-1 border-gray-300">
      {/* left: 60% – stacked in one column */}
      <div className="flex flex-col items-start justify-center space-y-4">
        <div className='text-4xl'>
          Hi, I'm Fiona
        </div>
        <pre className="w-full text-xl bg-gray-50 p-4 tracking-wide leading-loose">
{`{
  "name": "Fiona Sun",
  "MBTI": "infp",
  "role": "IT New Grad",
  "motto": "Make Something Wonderful",
}`}
        </pre>

        <p
          className="text-xl tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
        >
          I'm a master student at University of Auckland majoring in Information Technology. 
          Passionate about developing applications that merge purpose with aesthetics.
        </p>

        {/* 3 contact icons in a row */}
        <div className='flex items-center justify-start space-x-6'>
          <Link
            href="https://www.linkedin.com/in/fiona-sun-424858270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/Sun0328"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </Link>
          <a
            href="mailto:fiona.sun328@gmail.com"
          >
            <EmailIcon />
          </a>
        </div>
      </div>

      {/* right: 40% */}
      <div className="flex items-center justify-center p-6">
      </div>
    </div>
  );
}
