'use client';

import Image from 'next/image';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function AboutMe() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'black',
        border: '1px solid rgba(79, 70, 229, 0.4)',
        backdropFilter: 'blur(6px)',
        fontFamily: 'Inter, ui-sans-serif, system-ui',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Image
            src="/icons/light-bulb-svgrepo-com.svg"
            alt="Lightbulb"
            width={20}
            height={20}
            style={{ marginRight: '8px' }}
          />
          <Typography variant="h6" sx={{ color: '#4F46E5' }}>
            About Me
          </Typography>
        </Box>

        <Box component="ul" sx={{ pl: 2, listStyle: 'disc', my: 2, mr: 2 }}>
          <li style={{ marginBottom: '1rem' }}>
            <Typography>
              👋 You can call me <strong>Fiona</strong>.
            </Typography>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Typography>
              🌎 Current Location: <strong>Auckland, New Zealand</strong>
            </Typography>
          </li>
          <li>
            <Typography>
              ✈️ Lived in <strong>Shanghai, China</strong> in the past.
            </Typography>
          </li>
        </Box>
      </CardContent>
    </Card>
  );
}
