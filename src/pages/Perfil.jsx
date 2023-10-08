import React,{useState} from 'react';
import { Grid, Avatar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonComponent from '../components/ButtonComponent';
import ModalForm from '../components/ModalForm';
import CardComponent from '../components/CardComponent'
import Slider from "../components/Slider"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


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


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
       <Toolbar />
      <Grid container justifyContent="center" alignItems="center" spacing={10}    >
        <Grid item>
          <Avatar sx={{ width: 200, height: 200 }}>
            <AccountCircleIcon sx={{ fontSize: 200 }} />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h2">teste</Typography>
          <Typography variant="body1" color="textSecondary">
            teste
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginTop: 3 , padding:'20px'}}>
        Meus Projetos
      </Typography>
      <Slider>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
      
      </Slider>
      <div style={{display:'flex', justifyContent: 'center'}}>
         <ButtonComponent textBtn={'Novo Projeto'} colorBtn={'purple'} textColor={'white'} onClick={openModal}  />

      </div>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
      </Box>
    </>
  );
}

export default Perfil;
