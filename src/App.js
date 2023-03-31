import React from 'react';
import NavBar from './components/NavBar.js'
import './App.css'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact />
        <Route path='/project' exact />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' exact />
      </Routes>
      <Footer />
    </Router>

  );
}



export default App;
