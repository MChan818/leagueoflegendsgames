import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import Tournament from './pages/LoL/Tournament';
import Roulette from './pages/LoL/Roulette';

import './App.css';

const App = () =>{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/lol/tournament' element={<Tournament/>}/>
      <Route path='/lol/roulette' element={<Roulette/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
