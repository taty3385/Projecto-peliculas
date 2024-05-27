import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "gray", height: "15vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <Typography sx={{color:"white"}}>Hecho por Tamara Zárate</Typography>
    <Box>
    <IconButton
          component="a"
          href="mailto:tatyy661@gmail.com"
          target="_blank"
        
        >
          <EmailIcon />
        </IconButton>
    <IconButton
      component="a"
      href="https://www.linkedin.com/in/tamara-zarate-33aab7161/"
      target="_blank"
    
    >
      <LinkedInIcon sx={{backgroundColor:"white" ,color:"blue"}} />
    </IconButton>
    </Box>
  </Box>
  )
}
