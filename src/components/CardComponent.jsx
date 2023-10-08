import React from 'react'
import {  Card, CardContent, Typography } from '@mui/material';

const CardComponent = () => {


  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.primary">
          Nome do Projeto
        </Typography>
        <Typography  color="text.secondary">
          last modified: 17/09/2022
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor doloribus optio nisi dolores repudiandae ab saepe necessitatibus voluptas quam assumenda fuga modi dolorem, illo consequatur quidem rem voluptate. Tenetur.
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  
  return (
    <div>
      <Card  sx={{  width:'400px', mr:'10px' }} variant="outlined">{card}</Card>
    </div>
  )
}

export default CardComponent
