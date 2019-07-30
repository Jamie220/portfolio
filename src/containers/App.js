import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo'
import Intro from '../components/Intro/Intro'


const App = ()=> {
  return (
    <div >
      <Navbar />
      <Logo />
      <Intro />
    </div>
  );
}

export default App;