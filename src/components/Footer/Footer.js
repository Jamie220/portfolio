import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const Footer = () => {
  const {footer} = useContext(PortfolioContext);
  const {socialMedias} = footer;

  return(
    
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>

        <div className="social-links">
          {socialMedias &&
            socialMedias.map((socialMedia, index) => {
              const { name, url } = socialMedia;
              return (
                <a
                  key={index}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className={`fa fa-${name} fa-inverse`} />
                </a>
              );
            })}
        </div>

        <hr />

        <p className="footer__text">
          © 2019 - Developed with
          <i
            style={{ color: '#a8630f', fontSize: '1.8rem' }}
            className="fa fa-coffee px-2"
          />
           and 
          <i
            style={{ color: '#dc3545', fontSize: '1.8rem' }}
            className="fa fa-heart px-2"
          />
          by{' '}
          <a
            href="https://github.com/Jamie220"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jamie Wang
          </a>
          {' '}and many thanks with Jacobo Martínez
        </p>
      </div>
    </footer>
  );

}

export default Footer;