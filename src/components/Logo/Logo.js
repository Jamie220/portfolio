import React from 'react';
import Tilt from 'react-tilt';
import logo from '../Logo/Logo.png'

const Logo = ()=> {
    return (
        <div>
            <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"><img src={logo} alt="Logo" /></div>
            </Tilt>
        </div>
    );
}
export default Logo;
