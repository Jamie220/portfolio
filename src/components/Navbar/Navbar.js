import React from 'react';
// import Logo from '../Logo/Logo'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return(
      <nav className='navbar sticky-top d-flex justify-content-sm-end'>     
        <ul className ='nav'>
          <li className='nav-itme'><a className='nav-link active' href='#about'>About</a></li>
          <li className='nav-itme'><a className='nav-link active' href='#!'>Work</a></li>
          <li className='nav-itme'><a className='nav-link active' href='#!'>Contact</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;