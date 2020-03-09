import React from 'react';



const Navbar = (props) => {
  return (
    <nav className='navbar sticky-top d-flex justify-content-sm-end' style={props.style}>
      <span role="img" aria-label="sun" className="emoji">🌞</span>
      <label className='label toggle'>
        <input
          type="checkbox"
          onChange={props.setDarkMode}
          className="toggle_input"
          checked={!props.value}
        />
      <div className='toggle-control'></div>
      </label>
      <span role="img" aria-label="moon" className="emoji">🌛</span>
    </nav>
  );
}

export default Navbar;