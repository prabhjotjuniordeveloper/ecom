import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer className="footer footer-2">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="widget widget-about">
                                    {/* <img
                                     
                                        src="assets/images/demos/demo-8/whitelogo.png"
                                        className="footer-logo"
                                        alt="Footer Logo"
                                        width="140"
                                        height="25"
                                    /> */}
                                    <div
                                        className="footer-logo widget-title"
                                        style={{ margin: '0', position: 'relative', top: '8px', color: 'gray' }}
                                    >
                                        <h6 className="widget-title" style={{ fontSize: '25px' }}>
                                            PROBO
                                        </h6>
                                    </div>

                                    <p>
                                        Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,
                                        eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                                        quis, accumsan porttitor, facilisis luctus, metus.
                                    </p>

                                    <div className="widget-about-info">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <span className="widget-about-title">Got Question? Call us 24/7</span>
                                                <a href="tel:123456789">+0123 456 789</a>
                                            </div>
                                            <div className="col-sm-6 col-md-8">
                                                <span className="widget-about-title">Payment Method</span>
                                                <figure className="footer-payments">
                                                    <img
                                                        src="assets/images/payments.png"
                                                        alt="Payment methods"
                                                        width="272"
                                                        height="20"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Information</h4>
                                    <ul className="widget-list">
                                        <li><a href="/About">About Probo</a></li>
                                        <li><a href="/Shop">How to shop on Probo</a></li>
                                        <li><a href="/Faq">FAQ</a></li>
                                        <li><a href="/Contact">Contact us</a></li>
                                        <li><a href="/LoginPage">Log in</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>
                                    <ul className="widget-list">
                                        <li><a href="/404">Payment Methods</a></li>
                                        <li><a href="/404">Money-back guarantee!</a></li>
                                        <li><a href="/404">Returns</a></li>
                                        <li><a href="/404">Shipping</a></li>
                                        <li><a href="/404">Terms and conditions</a></li>
                                        <li><a href="/404">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>
                                    <ul className="widget-list">
                                        <li><a href="/LoginPage">Sign In</a></li>
                                        <li><a href="/Cart">View Cart</a></li>
                                        <li><a href="/Wishlist">My Wishlist</a></li>
                                        <li><a href="/Checkout">Track My Order</a></li>
                                        <li><a href="/404">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">
                            Copyright © 2019 Probo Store. All Rights Reserved.
                        </p>
                        <ul className="footer-menu">
                            <li><a href="/404">Terms Of Use</a></li>
                            <li><a href="/404">Privacy Policy</a></li>
                        </ul>

                        <div className="social-icons social-icons-color">
                            <span className="social-label">Social Media</span>
                            <a href="/404" className="social-icon social-facebook" title="Facebook" target="_blank" rel="noreferrer">
                                <i className="icon-facebook-f"></i>
                            </a>
                            <a href="/404" className="social-icon social-twitter" title="Twitter" target="_blank" rel="noreferrer">
                                <i className="icon-twitter"></i>
                            </a>
                            <a href="/404" className="social-icon social-instagram" title="Instagram" target="_blank" rel="noreferrer">
                                <i className="icon-instagram"></i>
                            </a>
                            <a href="/404" className="social-icon social-youtube" title="Youtube" target="_blank" rel="noreferrer">
                                <i className="icon-youtube"></i>
                            </a>
                            <a href="/404" className="social-icon social-pinterest" title="Pinterest" target="_blank" rel="noreferrer">
                                <i className="icon-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
