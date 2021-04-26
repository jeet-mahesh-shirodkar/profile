import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import download from '../../Images/download.png';
import arrow from '../../Images/pngtree-download-arrow.jpg';

const Header2 = () => {
    return (
        <Fragment>
                        <div className="navbar_new">
                                    <ul className="navbar__ul">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="bar_active" className="nav-link" to="/profile">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="bar_active" className="nav-link" to="/profile/work">Work</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="bar_active" className="nav-link" to="/profile/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className="resume_link" href="https://drive.google.com/uc?export=download&id=1k2yB6gJGs4Ps9i971dS1QKhLtXXRS1y5" download>
                                            Resume
                                            </a>
                                        </li>
                                    </ul>
                        </div>
        </Fragment>
    );
}

export default Header2;