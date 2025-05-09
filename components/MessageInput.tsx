'use client'

import { useState } from 'react';
import { useUser } from "@clerk/nextjs"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

interface Props { onSent: () => void }

// Customized TextField
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(158, 158, 158, 0.5)', // border
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(158, 158, 158, 0.8)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4F46E5',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(229, 231, 235, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: '#E5E7EB',
  },
});

export default function MessageInput({ onSent }: Props) {
    const { user } = useUser()

    console.log(user);
    console.log(user?.imageUrl);
    console.log(user?.fullName);
    
    
    const [message, setMessage] = useState(''); 
    const isMessageEmpty = message.trim() === '';   
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!message.trim()) return   
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {   content: message.trim(), 
                sender: user?.fullName, 
                sender_avatar: user?.imageUrl 
            }
        ),
      })
      if (res.ok) {
        setMessage('')
        onSent()
      }
    }   
    return (
      <Box
        component="form"
        sx={{ 
          width: '100%', 
          maxWidth: { xs: '100%', md: '70%' },
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <StyledTextField
          id="message-input"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />

        <div className='flex flex-row justify-between items-center mt-2'>
            <div className='flex flex-row items-center gap-4'>
                <img src={user?.imageUrl} alt="user-avatar" className='w-8 h-8 rounded-full' />
                <div className='text-gray-400'>{user?.fullName}</div>
            </div>

            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                endIcon={<SendIcon />}
                disabled={isMessageEmpty}
                sx={{ 
                    alignSelf: 'flex-end',
                    textTransform: 'none',
                    px: 3,
                    py: 1,
                    opacity: isMessageEmpty ? 0.6 : 1,
                    '&.Mui-disabled': {
                    backgroundColor: 'rgba(79, 70, 229, 0.5)',
                    color: 'rgba(229, 231, 235, 0.5)'
                    }
                }}
                >
                Send
            </Button>
        </div> 
      </Box>
    );
}
