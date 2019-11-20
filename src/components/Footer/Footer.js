import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const Footer = () => {
  const {footer} = useContext(PortfolioContext);
  const {socialMedias} = footer;

  return(
    <footer>
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

        {/* <p className="footer__text">
          © 2019 - Developed with
          <i
            style={{ color: '#dc3545', fontSize: '1.8rem' }}
            className="fa fa-heart px-2"
          />
          by{' '}
          <a
            href="https://github.com/covidev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacobo Martínez
          </a>
        </p> */}
      </div>
    </footer>
  );
    </footer>
  )
}

export default Footer;