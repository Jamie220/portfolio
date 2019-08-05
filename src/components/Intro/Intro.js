import React from 'react';
import '../Intro/Intro.css';


const Intro = () => {
    return (
        <>
            <header className="masthead">
                <div className="container h-100">
                    <main role="main" className="row h-100 align-items-center inner cover">
                        <div className="col-12 text-center">
                        <h1 className="cover-heading animated animatedFadeInUp fadeInUp">Hi, I'm Jamie</h1>
                        <p className="lead animated animatedFadeInUp fadeInUp">I am a front end developer.</p>
                        </div>
                    </main>
                </div>
            </header>
        </>
    );
}
export default Intro;