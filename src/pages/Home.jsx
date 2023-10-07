
import React from 'react'
import CardComponent from '../components/CardComponent'
import Slider from "../components/Slider"

const Home = () => {
  return (
    <>
      {/* <Sidebar/> */}
      <Slider>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
      
      </Slider>
    </>
    // <div>Home</div>

  )
}

export default Home