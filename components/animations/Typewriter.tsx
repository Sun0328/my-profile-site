'use client';

import { useEffect, useState } from 'react';

export default function Typewriter({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <pre className="w-full text-gray-700 md:text-lg bg-gray-50 p-4 font-mono leading-loose whitespace-pre-wrap rounded-lg">
      {displayedText}
    </pre>
  );
}
