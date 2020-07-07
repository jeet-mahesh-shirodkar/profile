import React, { useState } from "react";
import home from '../../Images/home3.svg';
import { NavLink } from "react-router-dom";
import {Transition} from 'react-spring/renderprops';
import {useTransition, animated} from 'react-spring';




const Home = () => {

    const [toggle, set] = useState(false);
    const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })

    return (
    <React.Fragment>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Ciao Team ! <strong className="brand-name">Sara </strong> here.</h1>
                                    <h2 className="my-3">I 💖 Turmeric Milk with Honey 😋 and I'm a JS Dev 🤓.
                                         Peace IN.   
                                        {
                                        transitions.map(({ item, key, props }) => 
                                        item ? <animated.div style={props}>😄</animated.div>:<animated.div style={props}>🤪</animated.div>)}
                                        </h2>
                                        <div className="mt-3">
                                            Find More <NavLink to="/about" className="btn-get-started">About Me</NavLink>
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