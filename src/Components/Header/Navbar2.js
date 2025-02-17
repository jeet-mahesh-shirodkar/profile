import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import download from '../../Images/download.png';
// import arrow from '../../Images/pngtree-download-arrow.jpg';

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
                                            {/*  
                                            https://drive.google.com/uc?id=1B6J8WlgkDpDD-IlL9_GLbJ6tq9Jb3o56&amp;export=download
                                            https://drive.google.com/uc?export=download&id=1gq5PreT4L0mMrv31Df6nfsY_FWqqjYt1*/}
                                            <a className="resume_link" href="https://drive.google.com/uc?id=1gq5PreT4L0mMrv31Df6nfsY_FWqqjYt1&amp;export=download" download="Jeet_Frontend">
                                            Resume
                                            </a>
                                        </li>
                                    </ul>
                        </div>
        </Fragment>
    );
}

export default Header2;