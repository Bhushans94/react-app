import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Header.css';
import SearchBar from '../searchbar/SearchBar';
import CustomNavbar from '../navbar/CustomNavbar';
import SideBar from '../sideBar/SideBar';
import { data } from '../../constants/constants';
import { getFilterData } from '../../services/apiCall';

const categoriesOption = [
	{ value: 'all', text: 'All Categroies' },
	{ value: 'tv', text: 'TV' },
	{ value: 'mobile', text: 'Mobile' },
	{ value: 'laptops', text: 'Laptops' },
]

const Header = ({ setCurrentHeader }) => {

	// Code to get cartItemCount from store
	const cartCount = useSelector(state => state.cart.cartItemCount);
	const [open, setOpen] = useState(false);
	const [filterData, setFilterData] = useState([]);
	const [filter, setFilter] = useState('');

	// hook to handle search bar
	useEffect(() => {
		const didMount = async () => {
			try {
				if (filter.length > 2) {
					const res = await getFilterData({ filter });
					setFilterData(res.data);
				}
			} catch (error) {
				console.log(error);
			}
		}
		didMount()
	}, [filter]);

	//Function to render the different Categories
	const renderSearchFilterOption = () => {
		return categoriesOption.map((option, index) => {
			return <option value={option.value} key={`filteroption-${index}`}>{option.text}</option>
		})
	}

	return (
		<header className="mds-header">
			<div className="mds-container">
				<div className="mds-header-row">
					<div className="mds-menu-left-details">
						<div className="navbar d-block d-xl-none">
							<a href="#" id="toggle-sidebar-res">
								<div className="bar-style">
									<i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
								</div>
							</a>
						</div>
						<div className="brand-logo">
							<a href="#">
								<img src='/assets/images/logo.webp' className="logo-img" alt="logo" />
							</a>
						</div>
					</div>
					<div className="mds-search-middle-details">
						<div className="mds-header-middle-wrapper">
							<form role="form">
								<div className="mds-form">
									<SearchBar data={filterData} setFilter={setFilter} />
									<div className="mds-all-categroies-data">
										<select defaultValue='all' className="w-full text-black-900 bg-white">
											{renderSearchFilterOption()}
										</select>
									</div>
									<button className="mdc-button mdc-button--raised mds-btn-search">
										<span className="material-icons mds-rating-active">
											search
										</span>
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="mds-right-details">
						<div className="mds-loginRegister-details">
							<a href="#">Login</a>
							<span className="mds-separtor">|</span>
							<a href="#">Signup</a>
						</div>
						<div className="mds-addtocard-and-wishlist">
							<div className="mds-search-wrapper mr-10">
								<img src='/assets/images/search-icon.webp' alt="search" />
							</div>
							<div className="mds-profile-wrapper mr-10">
								<img src='/assets/images/profile.webp' alt="profile" />
							</div>
							<div className="mds-wishlist-wrapper mr-10">
								<img src='/assets/images/heart.webp' alt="wishlist" />
							</div>
							<div className="mds-cart-wrapper">
								<a href="#">
									<img src='/assets/images/cart.webp' alt="cart icon" />
									<div className="mds-badge">{cartCount}</div>
								</a>
							</div>
							<div className="mds-humburger-wrapper">
								<img onClick={() => setOpen(true)} src='/assets/images/menu-icon.webp' width={24} height={24} alt="menu icon" />
								<SideBar setCurrentHeader={setCurrentHeader} anchor={'right'} list={data} open={open} setOpen={setOpen} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<CustomNavbar setCurrentHeader={setCurrentHeader} />
		</header>
	)
}

export default Header;