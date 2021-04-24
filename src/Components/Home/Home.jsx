import React, { useState } from "react";
import home from '../../Images/home3.svg';
import { NavLink } from "react-router-dom";
import {Transition} from 'react-spring/renderprops';
import {useTransition, animated} from 'react-spring';




const Home = () => {

    return (
    <React.Fragment>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Ciao Team ! <strong className="brand-name">Jeet </strong> here.</h1>
                                    <h2 className="my-3">I'm a JS Dev 🤓 and I 💖 Turmeric Milk with Honey 😋.
                                         Peace IN.  
                                    </h2>
                                        <div className="mt-3" style={{zIndex: "5"}}>
                                            <NavLink to="/about" className="btn-get-started">About Me</NavLink>
                                        </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={home} className="img-fluid animated" alt="home-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    );
}

export default Home;