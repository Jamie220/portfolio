import React from 'react';
import { relative } from 'path';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faWordpress, faReact, faGitAlt, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons';



export default class About extends React.Component {
    render() {
        let myInformation = this.props.myInformation;
            return (
                <section id="about">
                    <div className="container">
                        <h2>About Me</h2>
                        <div className="row">
                            <div className="col-sm-3 m-3">
                                <img src="images/portfolio_pic.jpg" className="rounded-circle " style={{ position: relative, width: '120px', height: '120px' }} alt="" />
                            </div>
                            <div className="col-8">
                                <p>{myInformation.aboutMe}</p>
                            </div>
                        </div>
                        <div className="m-3">
                            <h2>Skills</h2>
                            <div className="container text-center">
                                <ul className="row list-unstyled">
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faHtml5} size="3x" /></li>
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faCss3Alt} size="3x" /></li>
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faWordpress} size="3x" /></li>
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faReact} size="3x" /></li>
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faGitAlt} size="3x" /></li>
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faBootstrap} size="3x" /></li>
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faJs} size="3x" /></li>
                                    <li className="col-md-2 m-2"><FontAwesomeIcon icon={faNodeJs} size="3x" /></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
        );
    }
}