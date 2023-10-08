
import React from 'react'
import CardComponent from '../components/CardComponent'
import Slider from "../components/Slider"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Category from '../components/Category'

const Home = () => {
  return (
    <>

      <ReactSearchAutocomplete />
      <Category />
      <Category />
    </>
    // <div>Home</div>

  )
}

export default Home