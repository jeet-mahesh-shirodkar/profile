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
                    <div className="">
                            <span><a target="_blank" href="https://github.com/jeet-mahesh-shirodkar/"><img src={git} alt="git-img"/>Github</a></span>
                            <span><a target="_blank" href="https://www.linkedin.com/in/jeet-mahesh-shirodkar/"><img src={linkedin} alt="linkedin-img"/>Linkedin</a></span>
                            <span><a target="_blank" href="https://medium.com/@shirodkar.jeet.15ee5062/"><img src={medium} alt="medium-img"/>Medium</a></span>
                        </div>
                </div>
            </div>
            </section>
        </Fragment>
    );
}

export default Footer;