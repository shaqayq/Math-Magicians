import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';

/* eslint-disable */ 
function App() {
  return (
    <>
    <Router basename='/Math-Magicians'>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/calculator' element={<Calculator />}></Route>
            <Route path='/quote' element={<Quote />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
