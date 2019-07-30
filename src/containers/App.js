import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ()=> {
  return (
    <div >
      <Navbar />
      <Logo />
    </div>
  );
}

export default App;