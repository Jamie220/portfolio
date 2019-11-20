import React from 'react';



const Navbar = () => {
    return(
      <nav className='navbar sticky-top d-flex justify-content-sm-end'>     
        <ul className ='nav'>
          <li className='nav-itme'><a className='nav-link active' href='#about'>About</a></li>
          <li className='nav-itme'><a className='nav-link active' href='#projects'>Projects</a></li>
          <li className='nav-itme'><a className='nav-link active' href='#contact'>Contact</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;