import React from 'react';

class Projects extends React.Component {
    render(props) {
        let myInformation = this.props.myInformation;
        return (
            <>
                <section id="Projects">
                    <div className="container">
                        <div className ="row">
                            <div className="col">
                                <h2>Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm d-flex">
                                <div className="card flex-fill">
                                    <img className="card-img-top" src="./images/portfolio_pic.jpg" alt="projects images"/>
                                    <div className="card-body">
                                        Proident sint dolor proident Lorem eiusmod ea adipisicing dolore ea deserunt eiusmod quis velit. Sunt dolor incididunt non elit exercitation adipisicing esse veniam nulla sint reprehenderit Lorem mollit adipisicing. Ipsum minim amet mollit aliqua occaecat. Est velit veniam laboris aliquip enim nostrud nisi dolore. Mollit nostrud Lorem veniam occaecat.
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm d-flex">
                                <div className="card flex-fill">
                                    <img className="card-img-top" src="./images/portfolio_pic.jpg" alt="projects images"/>
                                    <div className="card-body">
                                        Proident sint dolor proident Lorem eiusmod ea adipisicing dolore ea deserunt eiusmod quis velit. Sunt dolor incididunt non elit exercitation adipisicing esse veniam nulla sint reprehenderit Lorem mollit adipisicing. Ipsum minim amet mollit aliqua occaecat. Est velit veniam laboris aliquip enim nostrud nisi dolore. Mollit nostrud Lorem veniam occaecat.
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm d-flex">
                                <div className="card flex-fill">
                                    <img className="card-img-top" src="./images/portfolio_pic.jpg" alt="projects images"/>
                                    <div className="card-body">
                                        Proident sint dolor proident Lorem eiusmod ea adipisicing dolore ea deserunt eiusmod quis velit. Sunt dolor incididunt non elit exercitation adipisicing esse veniam nulla sint reprehenderit Lorem mollit adipisicing. Ipsum minim amet mollit aliqua occaecat. Est velit veniam laboris aliquip enim nostrud nisi dolore. Mollit nostrud Lorem veniam occaecat.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Projects;