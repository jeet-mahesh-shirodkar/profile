import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <Fragment>
            <section id="footer">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                            <span><a href="https://www.github.com">Github</a></span>
                            <span><a href="https://www.linkedin.com/">linkedin</a></span>
                        </div>
                </div>
            </div>
            </section>
        </Fragment>
    );
}

export default Footer;