import React from 'react';
import { Grid, Avatar, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Category from '../components/Category';
const drawerWidth = 240;
const Perfil = () => {
  const contentStyle = {
    flexGrow: 1,
    marginLeft: `${drawerWidth}px`,
    padding: '20px', 
  };

  const mobileContentStyle = {
    flexGrow: 1,
    padding: '20px', 
  };
  return (
    <>
    <Box
        component="main"
        sx={
          window.innerWidth >= 600
            ? contentStyle
            : mobileContentStyle
        }

      >
      <Grid container justifyContent="start" alignItems="center" spacing={2}  >
        <Grid item>
          <Avatar sx={{ width: 200, height: 200 }}>
            <AccountCircleIcon sx={{ fontSize: 200 }} />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h6">teste</Typography>
          <Typography variant="body2" color="textSecondary">
            teste
          </Typography>
        </Grid>
      </Grid>
      <Category title="Meus projetos"/>
      </Box>
    </>
  );
}

export default Perfil;
