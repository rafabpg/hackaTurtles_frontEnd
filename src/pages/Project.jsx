import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import Chat from '../components/Chat';
const drawerWidth = 240;
const Project = () => {
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
      <Typography sx={{ fontSize: 24, mb:'10px', fontWeight:'600' }} color="text.primary">
          Nome do projeto
        </Typography>
        <Typography sx={{ fontSize: 16, mb:'10px'}} color="text.primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum distinctio accusantium minus fugiat sint quisquam aut omnis recusandae modi corrupti dicta, sapiente quam repellat iste veritatis corporis fugit repellendus.
          Ipsam, accusamus! Unde accusantium ducimus rem quae sit inventore velit sed odit voluptatem, dicta neque dolores consectetur magnam aperiam non nisi ex nobis perferendis iusto consequuntur illo ab quam! Quia.
          Delectus amet optio cum unde provident facere laborum consequuntur nostrum commodi laboriosam fugit recusandae ut iusto sunt nisi, debitis ea voluptatem deleniti fuga, nobis veritatis adipisci? Quasi molestias voluptate est.
        </Typography>
        <Typography sx={{ fontSize: 16, mb:'10px'}} color="text.primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum distinctio accusantium minus fugiat sint quisquam aut omnis recusandae modi corrupti dicta, sapiente quam repellat iste veritatis corporis fugit repellendus.
          Ipsam, accusamus! Unde accusantium ducimus rem quae sit inventore velit sed odit voluptatem, dicta neque dolores consectetur magnam aperiam non nisi ex nobis perferendis iusto consequuntur illo ab quam! Quia.
          Delectus amet optio cum unde provident facere laborum consequuntur nostrum commodi laboriosam fugit recusandae ut iusto sunt nisi, debitis ea voluptatem deleniti fuga, nobis veritatis adipisci? Quasi molestias voluptate est.
        </Typography>
        <Box sx={{display: 'flex', gap:'20px'}}>
          <Chip label="Chip Outlined" variant="filed" />
          <Chip label="Chip Outlined" variant="filed" />
          <Chip label="Chip Outlined" variant="filed" />
          <Chip label="Chip Outlined" variant="filed" />
        </Box>
        <Box sx={{display: 'flex', gap:'200px'}}>
          <Chat title="Colaboradores" />
          <Chat title="Geral"/>
        </Box>
      </Box>
    </>
  )
}

export default Project