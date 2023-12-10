import React from 'react'

import './Footer.css';

const Footer = () => {
    return (
        <div className="mds-footer-container">
            <div className="mds-footer-img-wrapper">
                <img src='/assets/images/footer.jpg' className="w-full" />
            </div>
            <div className="mds-footer-links-wrapper">
                <div className="mds-footer-col-first">
                    <h2 className="mds-footer-tile">About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
                        laoreet.
                    </p>
                    <div className="mds-social-media-list">
                        <a href="#">
                            <img src='/assets/images/facebook.png' />
                        </a>
                        <a href="#">
                            <img src='/assets/images/instagram.png' />
                        </a>
                        <a href="#">
                            <img src='/assets/images/skype.png' />
                        </a>
                        <a href="#">
                            <img src='/assets/images/youtube.png' />
                        </a>
                    </div>
                </div>
                <div className="mds-footer-col-second">
                    <div className="mds-footer-col-second-wrapper">
                        <div className="mds-footer-col-infodetails">
                            <h2 className="mds-footer-tile">Information</h2>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Delivery information</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Sales</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Conditions</a>{" "}
                                </li>
                                <li>
                                    <a href="#">EMI Payment</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mds-footer-col-accountdetails">
                            <h2 className="mds-footer-tile">ACCOUNT</h2>
                            <ul>
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                                <li>
                                    <a href="#">My Orders</a>
                                </li>
                                <li>
                                    <a href="#">Returns</a>
                                </li>
                                <li>
                                    <a href="#">Shipping</a>
                                </li>
                                <li>
                                    <a href="#">Wishlist</a>{" "}
                                </li>
                                <li>
                                    <a href="#">Account Details</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mds-footer-col-storedetails">
                            <h2 className="mds-footer-tile">Store</h2>
                            <ul>
                                <li>
                                    <a href="#">Affiliate</a>
                                </li>
                                <li>
                                    <a href="#">Discounts</a>
                                </li>
                                <li>
                                    <a href="#">Sales</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">All Collections</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mds-footer-col-third">
                    <h2 className="mds-footer-tile">CONTACT US</h2>
                    <p>
                        If you have any query, please contact us{" "}
                        <a href="maito:needus24@gmail.com">needus24@gmail.com</a>{" "}
                    </p>
                    <div className="mds-contact-details-wrapper">
                        <div className="mds-location-details">
                            <img src='/assets/images/location.png' alt="" />
                            <span>California, USA</span>
                        </div>
                        <div className="mds-phone-details">
                            <img src='/assets/images/phone.png' alt="" />
                            <span>+12012987481</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mds-container">
                <div className="mds-divider"></div>
            </div>

            <div className="mds-container text-center mds-container-bottom">
                <div className="mds-payment-list-wrapper">
                    <img src='/assets/images/payment/1.png' alt="" />
                    <img src='/assets/images/payment/2.png' alt="" className="mr-10" />
                    <img src='/assets/images/payment/3.png' alt="" />
                    <img src='/assets/images/payment/4.png' alt="" />
                    <img src='/assets/images/payment/5.png' alt="" />
                </div>
                <div className="mds-copyright-text">
                    Copyright.2022.All Right Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer