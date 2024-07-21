import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import CryptoList from './components/CryptoList';
import ContactForm from './components/ContactForm';
import './App.css';


const App = () => {
  return (
    // <div>
    //   <h1>App</h1>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cryptos" element={<CryptoList />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
