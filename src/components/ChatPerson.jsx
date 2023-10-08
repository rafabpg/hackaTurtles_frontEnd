import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const ChatPerson = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', mb:'10px'}}>
      <Avatar src="/broken-image.jpg" sx={{ width: 70, height: 70 }} />
      <Box sx={{ml: '15px'}}>
      <Typography sx={{ fontSize: 20, fontWeight:'600' }} color="text.primary">
          Nome
        </Typography>
        <Typography sx={{ fontSize: 14, }} color="text.primary">
          ultima mensagem...
        </Typography>
        </Box>
    </Box>
  )
}

export default ChatPerson