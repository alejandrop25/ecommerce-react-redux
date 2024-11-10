import React from 'react';
import Home from './pages/Home'; 
import Cart from './pages/Cart'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>  
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
