import React, { useState } from 'react'

import './Footer.css';

const footerInformation = ['About', 'Delivery information', 'Privacy Policy', 'Sales', 'Terms & Conditions', 'EMI Payment'];
const footerAccount = ['My Account', 'My Orders', 'Returns', 'Shipping', 'Wishlist', 'Account Details'];
const storeDetails = ['Affiliate', 'Discounts', 'Sales', 'Contact', 'All Collections'];
const socialIcons = ['/assets/images/facebook.webp', '/assets/images/instagram.webp', '/assets/images/skype.webp', '/assets/images/youtube.webp'];


const Footer = () => {

	const [aboutUs] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
	aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
	laoreet.`);

	// Function to render the footer static link details
	const getFooterDetails = (options, key) => {
		return options.map((info, index) => {
			return (
				<li key={`${key}-${index}`}>
					<a href="#">{info}</a>
				</li>
			)
		})
	}

	//Function to display the social images
	const getSocialImages = () => {
		return socialIcons.map((icons, index) => {
			return (
				<a href="#" key={`social-${index}`}>
					<img src={icons} alt='social icon' />
				</a>
			)
		})
	}

	//function to render the payment options
	const paymentOptionsImages = () => {
		return [...Array(5)].map((_, index) => {
			return <img key={`payment-${index}`} src={`/assets/images/payment/${index + 1}.png`} alt="payment cards" />
		})
	}

	return (
		<div className="mds-footer-container">
			<div className="mds-footer-img-wrapper">
				<img src='/assets/images/footer.webp' className="w-full" />
			</div>
			<div className="mds-footer-links-wrapper">
				<div className="mds-footer-col-first">
					<h2 className="mds-footer-tile">About Us</h2>
					<p>
						{aboutUs}
					</p>
					<div className="mds-social-media-list">
						{getSocialImages()}
					</div>
				</div>
				<div className="mds-footer-col-second">
					<div className="mds-footer-col-second-wrapper">
						<div className="mds-footer-col-infodetails">
							<h2 className="mds-footer-tile">Information</h2>
							<ul>
								{getFooterDetails(footerInformation, 'information')}
							</ul>
						</div>
						<div className="mds-footer-col-accountdetails">
							<h2 className="mds-footer-tile">ACCOUNT</h2>
							<ul>
								{getFooterDetails(footerAccount, 'account')}
							</ul>
						</div>
						<div className="mds-footer-col-storedetails">
							<h2 className="mds-footer-tile">Store</h2>
							<ul>
								{getFooterDetails(storeDetails, 'store')}
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
							<img src='/assets/images/location.webp' alt="location icon" />
							<span>California, USA</span>
						</div>
						<div className="mds-phone-details">
							<img src='/assets/images/phone.webp' alt="phone icno" />
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
					{paymentOptionsImages()}
				</div>
				<div className="mds-copyright-text">
					Copyright.{new Date().getFullYear()}.All Right Reserved
				</div>
			</div>
		</div>
	)
}

export default Footer