import React from "react";
import about from '../../Images/about1.svg';
import { NavLink } from "react-router-dom";

const About = () => {
    return(
    <React.Fragment>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h3>Bio</h3>
                            <p>
                            I'm front-end developer with analytical and development skills over a year of Industrial experience. 
                            I have worked in an environment of agile methodologies, DevOps deliveries and client interaction.
                            </p>
                            <p>
                            I was taught web development and designing by working in industrial projects and many times, myself 🤓.
                            I also have Bachelor of Engineering in Electronic from Mumbai University 📚.
                            </p> 
                            <p>I believe teaching and accepting new logics, Is key to happiness 😉.</p>
                            </div> 
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={about} className="img-fluid" alt="about-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    );
}

export default About;