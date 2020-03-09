import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
// import Logo from '../components/Logo/Logo';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';

import {
  mainData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../myInformation';


import { PortfolioProvider } from '../context';



function App() {
  const [main, setMainData] = useState({});
  const [about, setAboutData] = useState({});
  const [projects, setProjectsData] = useState([]);//project data is an array []
  const [contact, setContactData] = useState({});
  const [footer, setFooterData] = useState({});



  useEffect(() => {
    setMainData({ ...mainData });
    setAboutData({ ...aboutData });
    setProjectsData([...projectsData]);//project data is an array []
    setContactData({ ...contactData });
    setFooterData({ ...footerData })
  }, []);

  //dark-mode && light-mode style:
  const darkModeNav = { backgroundColor: "#1b2938" };
  const darkMode = { backgroundColor: "#1a1919", color: "#999" };
  const lightMode = {transition: 'background-color 0.25s ease-out'}

  const [dark, setDark] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark))
  }, [dark])

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'))
    return savedMode || false;
  }

  return (
    <PortfolioProvider value={{ main, about, projects, contact, footer }}>
      <Navbar
        style={dark ? darkModeNav : lightMode}
        setDarkMode={() => setDark(prevMode => !prevMode)}
        value={!dark}
      />
      {/* <Logo /> */}
      <Intro style={dark ? darkMode : lightMode} />
      <About />
      <Projects style={dark ? darkMode : lightMode} />
      <ContactMe />
      <Footer />
    </PortfolioProvider>
  )
}

export default App;