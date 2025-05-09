'use client';

import Image from 'next/image';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function Stack() {
  const icons = [
    { src: '/icons/html-5-svgrepo-com.svg', alt: 'HTML' },
    { src: '/icons/css-3-svgrepo-com.svg', alt: 'CSS' },
    { src: '/icons/js-svgrepo-com.svg', alt: 'JavaScript' },
    { src: '/icons/react-svgrepo-com.svg', alt: 'React' },
    { src: '/icons/next-dot-js-svgrepo-com.svg', alt: 'Next.js' },
    { src: '/icons/node-js-svgrepo-com.svg', alt: 'Node.js' },
    { src: '/icons/wordpress-color-svgrepo-com.svg', alt: 'WordPress' },
    { src: '/icons/java-svgrepo-com.svg', alt: 'Java' },
    { src: '/icons/dotnet-svgrepo-com.svg', alt: '.NET' },
    { src: '/icons/mysql-svgrepo-com.svg', alt: 'MySQL' },
    { src: '/icons/sqllite-svgrepo-com.svg', alt: 'Sqlite' },
  ];

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: '#fff',
        border: '1px solid rgba(79, 70, 229, 0.4)',
        backdropFilter: 'blur(6px)',
        fontFamily: 'Inter, ui-sans-serif, system-ui',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Image
            src="/icons/technical-support-help-svgrepo-com.svg"
            alt="Tech Icon"
            width={20}
            height={20}
            style={{ marginRight: '12px' }}
          />
          <Typography variant="h6" sx={{ color: '#4F46E5' }}>
            Tech Stack
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, ml: 1}}>
          {icons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              title={icon.alt}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
