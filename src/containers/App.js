import React from 'react';
import './App.css';
import myInformation from '../myInformation'
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  library.add(fab, faCheckSquare, faCoffee)
  return (
    <div>
      
        <Navbar />
        <Logo />
        <Intro myInformation={myInformation} />
        <About myInformation={myInformation} />
        <Projects />
        <Footer myInformation={myInformation}/>
      
    </div>
  );
}

export default App;