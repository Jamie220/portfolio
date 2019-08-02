import React from 'react';
import Tilt from 'react-tilt';


const ResumeButton = () => {
    return (
        <div className ="text-center">
            <div className="btn">
                <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 100, width: 100 }} >
                    <div className="Tilt-inner"><a href="https://drive.google.com/file/d/1y1ESNrxklNJxIcoS86D5fRoIyEHAs_is/view?usp=sharing" type="button" className="btn btn-secondary">Resume</a>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}
export default ResumeButton;