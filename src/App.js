import Login from './components/login/login'
import Home from './components/home/home'
import React from 'react'
import Register from './components/register/register'
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      

      <BrowserRouter>

        <Routes>
        <Route element={<Home />} path="" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Register />} path="/register"/>
          <Route path='*' element={<div><h1>Page not found</h1>
          </div>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
