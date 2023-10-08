
import React from 'react'
import CardComponent from '../components/CardComponent'
import Slider from "../components/Slider"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Category from '../components/Category'

import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
const drawerWidth = 240;
const Home = () => {


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
       <Toolbar />
        <div style={{marginLeft:'15px'}}>
          <ReactSearchAutocomplete />
          <Category title="Categoria 1"/>
          <Category title="Categoria 2"/>
        </div>
      </Box>
    </>
    

  )
}

export default Home