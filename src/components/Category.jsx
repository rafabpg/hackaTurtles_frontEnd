import { Typography } from '@mui/material'
import React from 'react'
import Slider from './Slider'
import CardComponent from './CardComponent'

const Category = () => {
  return (
    <div style={{margin:'15px 10px'}}>
      <Typography sx={{ fontSize: 24, mb:'5px', fontWeight:'600' }} color="text.primary">
          Categoria
        </Typography>
        <Slider>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
      </Slider>
    </div>
  )
}

export default Category
