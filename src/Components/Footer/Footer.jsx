import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <Fragment>
            <div className="container-fluid nav_bg">
                <div className="row">
                        <div className="col-10 mx-auto">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="bar_active" className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="bar_active" className="nav-link" to="/work">Work</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="bar_active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="bar_active" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
        </Fragment>
    );
}

export default Footer;