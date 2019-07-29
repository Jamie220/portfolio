import React from 'react';
import Tilt from 'react-tilt';
import logo from '../Logo/Logo.png'

const Logo = ()=> {
    return (
        <div>
            <Tilt className="Tilt border shadow-lg" options={{ max: 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img style={{paddingTop:'20px', paddingLeft:'15px'}} src={logo} alt="Logo" /></div>
            </Tilt>
        </div>
    );
}
export default Logo;