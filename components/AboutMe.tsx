'use client';

import Image from 'next/image';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function AboutMe() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        width: '100%',
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'black',
        border: '1px solid rgba(79, 70, 229, 0.4)',
        backdropFilter: 'blur(6px)',
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
            style={{ marginRight: '12px' }}
          />
          <Typography variant="h6" sx={{ color: '#4F46E5' }}>
            About Me
          </Typography>
        </Box>

        <Box component="ul" sx={{ px: 2, listStyle: 'none', color: '#E5E7EB'}}>
          <li style={{ marginBottom: '1rem' }}>
            <Typography>
              <span style={{ marginRight: '6px' }}>👋</span> You can call me <strong>Fiona</strong>.
            </Typography>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Typography>
              <span style={{ marginRight: '6px' }}>🌎</span> Current Location: <strong>Auckland, New Zealand.</strong>
            </Typography>
          </li>
          <li>
            <Typography>
              <span style={{ marginRight: '6px' }}>✈️</span> Lived in <strong>Shanghai, China</strong> in the past.
            </Typography>
          </li>
        </Box>
      </CardContent>
    </Card>
  );
}
