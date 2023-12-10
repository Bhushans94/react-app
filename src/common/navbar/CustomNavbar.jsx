import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import SideBar from '../sideBar/SideBar';
import { data } from '../../constants/constants';

const CustomNavbar = ({ setCurrentHeader }) => {

    const [open, setOpen] = useState(false);
    const currentLocation = useLocation();

    return (
        <div className="mds-header-bottom">
            <div className="mds-container">
                <div className="mds-header-bottom-row">
                    <div className="mds-header-bottom-left">
                        <div className="mds-header-bottom-categroies">
                            <img onClick={() => setOpen(true)} src='/assets/images/menu-icon.png' alt="" className="mr-20" />
                            <SideBar list={data} open={open} anchor={'left'} setCurrentHeader={setCurrentHeader} setOpen={setOpen} />
                            <span onClick={() => setOpen(true)} className="mr-20">All Categories</span>
                            <img src='/assets/images/down-arrow-white.png' alt="" />
                        </div>
                    </div>
                    <div className="mds-header-bottom-middle">
                        <nav className="mds-header-bottom-menus-center">
                            <ul className="mds-header-menus-list">
                                {
                                    data.map((item, index) => {
                                        return (
                                            <li key={item.name + index} className={currentLocation.pathname === item.path ? 'mds-header-menu mds-header-menu-active' : 'mds-header-menu'}>
                                                <Link to={item.path} onClick={() => setCurrentHeader(item.header)}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="mds-header-bottom-right">
                        <div className="mds-header-bottom-contact-details">
                            <img src='/assets/images/call-icon.png' alt="" />
                            <div className="mds-header-contactNumber">
                                <h6 className="mds-header-contactNumber-title">
                                    Contact Us 24/7
                                </h6>
                                <p className="mds-header-contactNumber-description">
                                    {" "}
                                    +12012987481
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar;