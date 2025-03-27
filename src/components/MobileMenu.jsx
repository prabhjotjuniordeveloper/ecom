// src/components/MobileMenu.js
import React, { useState } from 'react';
const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>

            {/* Mobile Menu Overlay */}
            <div className="mobile-menu-overlay"></div>

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>

                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>

                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            {/* Add your menu items here */}
                            <li className="active">
                                <a href="index.html">Home</a>
                                <ul>
                                    <li><a href="index-1.html">01 - furniture store</a></li>
                                    {/* More items... */}
                                </ul>
                            </li>
                            <li>
                                <a href="category.html">Shop</a>
                                <ul>
                                    <li><a href="category-list.html">Shop List</a></li>
                                    {/* More items... */}
                                </ul>
                            </li>
                            {/* More menu items... */}
                        </ul>
                    </nav>

                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>

            {/* Sign in / Register Modal */}
            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">Username or email address *</label>
                                                    <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="singin-password">Password *</label>
                                                    <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                                                </div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                                        <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                                                    </div>
                                                    <a href="#" className="forgot-link">Forgot Your Password?</a>
                                                </div>
                                            </form>
                                            {/* Google and Facebook login options */}
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google-plus-g"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="register-email">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email" name="register-email" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="register-password">Password *</label>
                                                    <input type="password" className="form-control" id="register-password" name="register-password" required />
                                                </div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                                        <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            {/* Google and Facebook register options */}
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google-plus-g"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Popup */}
            <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row no-gutters bg-white newsletter-popup-content">
                            <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                                <div className="banner-content text-center">

                                <div className='footer-logo widget-title'>
                                        <h6 className='widget-title' style={{fontSize: '25px'}}>PROBO</h6>
                                    </div>


                                    {/* <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width="60" height="15" /> */}
                                    <h2 className="banner-title">get <span>25<light>%</light></span> off</h2>
                                    <p>Subscribe to the Probo eCommerce newsletter to receive timely updates from your favorite products.</p>
                                    <form action="#">
                                        <div className="input-group input-group-round">
                                            <input type="email" className="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Address" required />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit"><span>go</span></button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="newsletter-checkbox">
                                        <label style={{padding:"35px"}}>
                                            <input type="checkbox"  style={{"marginRight":"20px"}}/>
                                            Don't show this popup again
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2-5col col-lg-5 d-none d-lg-flex align-items-center">
                                <img src="assets/images/demos/demo-8/slider/img-1.png" alt="popupbanner" className="popup-banner" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default MobileMenu;
