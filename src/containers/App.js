import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo'
import Intro from '../components/Intro/Intro'
import About from '../components/About/About'


const App = () => {
  return (
    <div>
      
        <Navbar />
        <Logo />
        <Intro />
        <About />
      
    </div>
  );
}

export default App;