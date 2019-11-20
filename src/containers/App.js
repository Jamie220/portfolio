import React, { useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
// import Logo from '../components/Logo/Logo';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
// import Footer from '../components/Footer/Footer'

import {
  mainData,
  aboutData,
  projectsData,
} from '../myInformation';


import { PortfolioProvider } from '../context';

function App() {
  const [main, setMainData] = useState({});
  const [about, setAboutData] = useState({});
  const [projects, setProjectsData] = useState([]);//project data is an array []
  


  useEffect(()=>{
    setMainData({ ...mainData });
    setAboutData({...aboutData});
    setProjectsData([...projectsData])//project data is an array []
  },[]);

  return(
    <PortfolioProvider value ={{main, about, projects}}>
      <Navbar />
      {/* <Logo /> */}
      <Intro />
      <About />
      <Projects />
    </PortfolioProvider>
  )
}

export default App;