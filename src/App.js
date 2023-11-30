import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/books" element={<Books/>}/>
          <Route  path="/addBooks" element={<AddBooks/>}/>
        
        </Routes>
      
<Footer />
    </Router>
  );
}

export default App;
