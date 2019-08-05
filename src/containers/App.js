import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo'
import Intro from '../components/Intro/Intro'
import ResumeButton from '../components/ResumeButton/ResumeButton';
import About from '../components/About/About'


const App = () => {
  return (
    <div>
      
        <Navbar />
        <Logo />
        <Intro />
        <ResumeButton/>
        <About />
      
    </div>
  );
}

export default App;