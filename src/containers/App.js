import React, { useState, useEffect} from 'react';
import {mainData} from '../myInformation';
import Navbar from '../components/Navbar/Navbar';
// import Logo from '../components/Logo/Logo';
import Intro from '../components/Intro/Intro';
// import About from '../components/About/About';
// import Projects from '../components/Projects/Projects';
// import Footer from '../components/Footer/Footer'

import { PortfolioProvider } from '../context'

function App() {
  const [main, setMainData] = useState({});

  useEffect(()=>{
    setMainData({ ...mainData })
  },[]);

  return(
    <PortfolioProvider value ={{main}}>
      <Navbar />
      {/* <Logo /> */}
      <Intro />
    </PortfolioProvider>
  )
}

export default App;