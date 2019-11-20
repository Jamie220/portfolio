import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context';
import Title from '../Title/Title'

const ContactMe = () =>{
    const { contact } = useContext(PortfolioContext);
    const {subtitle, btn, email} = contact;


    return(
        <section id="contact">
        <div className="container">
          <Title title="Contact" />
          <Fade bottom duration={1000} delay={700} distance="30px">
            <div className="contact-wrapper">
              <p className="contact-wrapper__text">
                {subtitle}
              </p>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={
                  email
                    ? `mailto:${email}`
                    : 'https://github.com/cobidev/react-simplefolio'
                }
              >
                {btn}
              </a>
            </div>
          </Fade>
        </div>
      </section>
    );
}

export default ContactMe