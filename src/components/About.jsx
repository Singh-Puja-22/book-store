import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography sx={{fontFamily:"fantasy"}} variant='h2'>This is a CURD application</Typography>
      <Typography sx={{fontFamily:"fantasy"}} variant='h3'>By MERN Stack</Typography>
    </Box>
  )
}

export default About;