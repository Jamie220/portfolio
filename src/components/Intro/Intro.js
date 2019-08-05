import React from 'react';
import '../Intro/Intro.css';


const Intro = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <main role="main" className="text-center inner cover">
                    <h1 className="cover-heading animated animatedFadeInUp fadeInUp">Hi, I'm Jamie</h1>
                    <p className="lead animated animatedFadeInUp fadeInUp">I am a front end developer.</p>
                </main>
            </div>
        </>
    );
}
export default Intro;