import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Project from './pages/Project';

const Router = () => {
  return (
    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/perfil" element={ <Perfil /> } />
      <Route path="/meus-projetos" element={ <Project /> } />
  </Routes>
  )
}

export default Router