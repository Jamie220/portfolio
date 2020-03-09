import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title'
import PortfolioContext from '../../context';
// import { relative } from 'path';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHtml5, faCss3Alt, faJs, faWordpress, faReact, faGitAlt, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const About = (props) => {
    const { about } = useContext(PortfolioContext);
    const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

    return (
        <section id="about">
            <div className="container">
                <Title title="About Me" />
                <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <Fade bottom duration={1000} delay={600} distance="30px">
                            <div className="about-wrapper__image">
                                <img
                                    className="img-fluid rounded shadow-lg"
                                    height="auto"
                                    width="300px"
                                    src={img}
                                    alt="Profile"
                                />
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Fade
                            duration={1000}
                            delay={1000}
                            distance="30px"
                        >
                            <div className="about-wrapper__info">
                                <p className="about-wrapper__info-text">
                                    {paragraphOne}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {paragraphTwo}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {paragraphThree}
                                </p>
                                {resume && (
                                    <span className="d-flex mt-3">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cta-btn cta-btn--resume"
                                            href={resume}
                                        >
                                            View Resume
                                        </a>
                                    </span>
                                )}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


// export default class About extends React.Component {
//     render() {
//         let myInformation = this.props.myInformation;
//             return (
//                 <section id="about">
//                     <div className="container">
//                         <h2>About Me</h2>
//                         <div className="row">
//                             <div className="col-sm-3 m-3">
//                                 <img src="images/portfolio_pic.jpg" className="rounded-circle " style={{ position: relative, width: '120px', height: '120px' }} alt="" />
//                             </div>
//                             <div className="col-8">
//                                 <p>{myInformation.aboutMe}</p>
//                             </div>
//                         </div>
//                         <div className="m-3">
//                             <h2>Skills</h2>
//                             <div className="container text-center">
//                                 <ul className="row list-unstyled">
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faHtml5} size="3x" /></li>
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faCss3Alt} size="3x" /></li>
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faWordpress} size="3x" /></li>
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faReact} size="3x" /></li>
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faGitAlt} size="3x" /></li>
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faBootstrap} size="3x" /></li>
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faJs} size="3x" /></li>
//                                     <li className="col-md-2 m-2"><FontAwesomeIcon icon={faNodeJs} size="3x" /></li>
//                                 </ul>
//                             </div>
//                         </div>

//                     </div>
//                 </section>
//         );
//     }
// }