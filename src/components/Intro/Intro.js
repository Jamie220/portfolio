import React from 'react';
import Tilt from 'react-tilt';
import '../Intro/Intro.css';



class Intro extends React.Component{
    render(){
        let myInformation = this.props.myInformation;
        return (
            <>
                <header className="masthead">
                    <div className="container h-100">
                        <main role="main" className="row h-100 align-items-center inner cover">
                            <div className="col-12 text-center">
                                <h1 className="cover-heading animated animatedFadeInUp fadeInUp">Hi, I'm {myInformation.name}</h1>
                                <p className="lead animated animatedFadeInUp fadeInUp">I am a {myInformation.role}.</p>
                                <div className="text-center">
                                    <div className="btn">
                                        <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 100, width: 100 }} >
                                            <div className="Tilt-inner"><a href="https://drive.google.com/file/d/1y1ESNrxklNJxIcoS86D5fRoIyEHAs_is/view?usp=sharing" type="button" className="btn btn-secondary">Resume</a>
                                            </div>
                                        </Tilt>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </header>
            </>
        );
    }
}
export default Intro;