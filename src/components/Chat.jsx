import { Box, Typography } from '@mui/material'
import React from 'react'
import ChatPerson from './ChatPerson'

const Chat = ({title}) => {
  return (
    <Box>
      <Typography sx={{ fontSize: 24, fontWeight:'600', margin:'10px 0' }} color="text.primary">
          {title}
        </Typography>
        <ChatPerson />
        <ChatPerson />
        <ChatPerson />
    </Box>
  )
}

export default Chat