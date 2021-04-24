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
                                            <NavLink exact activeClassName="bar_active" className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="bar_active" className="nav-link" to="/work">Work</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="bar_active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className="resume_link" href="https://drive.google.com/uc?export=download&id=1ROFGbGIov4Iy7tIe-6eX-8MLfa7KhVmc" download>
                                            Resume
                                            </a>
                                        </li>
                                    </ul>
                        </div>
        </Fragment>
    );
}

export default Header2;