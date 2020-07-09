import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import git from '../../Images/git.svg';
import linkedin from '../../Images/link.svg';
import medium from '../../Images/linkden2.svg';

const Footer = () => {
    return(
        <Fragment>
            <section id="footer">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                            <span><a target="_blank" href="https://www.github.com"><img src={git} alt="git-img"/>Github</a></span>
                            <span><a target="_blank" href="https://www.github.com"><img src={linkedin} alt="git-img"/>Linkedin</a></span>
                            <span><a target="_blank" href="https://www.medium.com"><img src={medium} alt="git-img"/>Medium</a></span>
                        </div>
                </div>
            </div>
            </section>
        </Fragment>
    );
}

export default Footer;