import React, { useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
// import Logo from '../components/Logo/Logo';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
// import Projects from '../components/Projects/Projects';
// import Footer from '../components/Footer/Footer'

import {
  mainData,
  aboutData,
} from '../myInformation';


import { PortfolioProvider } from '../context';

function App() {
  const [main, setMainData] = useState({});
  const [about, setAboutData] = useState({});


  useEffect(()=>{
    setMainData({ ...mainData });
    setAboutData({...aboutData});
  },[]);

  return(
    <PortfolioProvider value ={{main, about}}>
      <Navbar />
      {/* <Logo /> */}
      <Intro />
      <About />
    </PortfolioProvider>
  )
}

export default App;