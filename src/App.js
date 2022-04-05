import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';



function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
    </>
  );
}

export default App;
