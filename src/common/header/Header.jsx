import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Header.css';
import SearchBar from '../searchbar/SearchBar';
import CustomNavbar from '../navbar/CustomNavbar';
import SideBar from '../sideBar/SideBar';
import { data } from '../../constants/constants';
import { getFilterData } from '../../services/apiCall';

const Header = ({ setCurrentHeader }) => {

    // Code to get cartItemCount from store
    const cartCount = useSelector(state => state.cart.cartItemCount);
    const [open, setOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [filter, setFilter] = useState('');

    // hook to handle search bar
    useEffect(() => {
        if (filter.length > 2) {
            const getData = setTimeout(async () => {
                const res = await getFilterData('/assets/data/dummyFilters.json', {
                    filter
                });
                setFilterData(res.data);
            }, 1000);
            return () => clearTimeout(getData);
        }
    }, [filter]);

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
                                <img src='/assets/images/logo.png' className="logo-img" alt="" />
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
                                            <option value='all'>All Categroies</option>
                                            <option value='tv'>TV</option>
                                            <option value='mobile'>Mobile</option>
                                            <option value='laptops'>Laptops</option>
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
                                <img src='/assets/images/search-icon.png' alt="" />
                            </div>
                            <div className="mds-profile-wrapper mr-10">
                                <img src='/assets/images/profile.png' alt="" />
                            </div>
                            <div className="mds-wishlist-wrapper mr-10">
                                <img src='/assets/images/heart.png' alt="" />
                            </div>
                            <div className="mds-cart-wrapper">
                                <a href="#">
                                    <img src='/assets/images/cart.png' alt="" />
                                    <div className="mds-badge">{cartCount}</div>
                                </a>
                            </div>
                            <div className="mds-humburger-wrapper">
                                <img onClick={() => setOpen(true)} src='/assets/images/menu-icon.png' alt="" />
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