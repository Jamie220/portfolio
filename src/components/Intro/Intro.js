import React, {useContext}from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context';

const Intro = () => {
    const { main } = useContext(PortfolioContext);
    const { title, name, subtitle, cta } = main;


    return (
        <Container>
            <Fade
                duration={1000}
                delay={500}
                distance="30px"
            >
                <h1>{title}</h1>
                <h1>{name}</h1>
                <h1>{subtitle}</h1>
                <h1>{cta}</h1>
            </Fade>
        </Container>


    );
}
export default Intro;