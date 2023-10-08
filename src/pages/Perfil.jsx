import React from 'react'
import { Grid, Avatar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Perfil = () => {
  return (
    <>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
            <Avatar sx={{ width: 80, height: 80 }}>
            <AccountCircleIcon sx={{ fontSize: 60 }} />
            </Avatar>
        </Grid>
        <Grid item>
            <Typography variant="h6">teste</Typography>
            <Typography variant="body2" color="textSecondary">
            teste
            </Typography>
        </Grid>
        </Grid>
        <Typography variant="h2" gutterBottom sx={{textAlign:'center'}}>
            Meus Projetos
        </Typography>
   </>
  );
}

export default Perfil