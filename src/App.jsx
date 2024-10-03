

import React from 'react'
// import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import CreateForm from './components/pages/CreateForm';
import View from './components/pages/View';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import Blog from './components/pages/Blog';
import Update from './components/pages/Update';
import Table from './components/pages/table';
import ReadData from './components/pages/ReadData';




const App = () => {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/CreateForm" element={<CreateForm/>} />
      <Route path="/View0" element={<Blog />} />
      <Route path="/View/:id" element={<View/>} />
      <Route path="/Table" element={<Table/>} />
      <Route path="/Update/:BlogId" element={<Update/>} />
      <Route path="/ReadData:BlogId" element={<ReadData/>} />
  
     </Routes>
  <Footer/>
    </Router>
    </>
  )
}

export default App

