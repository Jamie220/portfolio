import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import PortfolioContext from '../../context';

const Intro = () => {
    const { main } = useContext(PortfolioContext);
    const { title, name, subtitle, cta } = main;


    return (
        <section id="intro" className="jumbotron">
            <Container >
                <Fade
                    duration={1000}
                    delay={500}
                    distance="30px"
                >
                    <h1 className="intro-title">{title}{' '}
                        <span>{name}</span>
                    </h1>
                </Fade>
                <Bounce 
                    left={true}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                >
                    <h1 className="intro-subTitle">I am a {subtitle}</h1>
                </Bounce>
                <Fade
                    duration={1000}
                    delay={1200}
                    distance="30px"
                >
                    <p className="hero-cta">
                        <a className="cta-btn cta-btn--hero" href="#about">
                            {cta}
                        </a>
                    </p>
                </Fade>
            </Container>
        </section>



    );
}
export default Intro;