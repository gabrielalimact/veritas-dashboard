import { useState } from 'react';
import { Box } from '@mui/material';

export const SwitchDiv = () => {
  const [background, setBackground] = useState('#eae9ee')
  const [color, setColor] = useState('#a4a3a8')

  const changeBackground = () => {
    if(background === 'white') {
      setBackground('#eae9ee')
      setColor('#a4a3a8')
    } else {
      setBackground('white')
      setColor('black')
    }
  }
  
  return (
    <Box sx={{
      display: 'flex',
      background: '#eae9ee',
      width: 'fit-content',
      padding: '2px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      cursor: 'pointer',
    }}>
      <Box sx={{
        background: background === 'white' ? '#eae9ee' : 'white',
        borderRadius: '20px',
        padding: '4px 30px',
        color: color === 'black' ? '#a4a3a8' : 'black',
      }}
          onClick={() => {changeBackground()}}
      >
        Full Statistics
      </Box>
      <Box onClick={() => {changeBackground()}} sx={{
        background: background,
        borderRadius: '20px',
        padding: '4px 30px',
        color: color,
      }}>
        Result Sumary
      </Box>
    </Box>
  )
}