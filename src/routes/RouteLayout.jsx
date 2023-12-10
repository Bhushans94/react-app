import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from '../store';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

const RouteLayout = () => {

    const [currentRoute, setCurrentRoute] = useState('HOME');
    const [currentHeader, setCurrentHeader] = useState('HOME');
    const currentLocation = useLocation();

    // hook to get current path on load
    useEffect(() => {
        if (currentLocation.pathname !== '/') {
            setCurrentRoute(`HOME${currentLocation.pathname.toUpperCase().replace(/_/g, ' ')}`);
        } else {
            setCurrentRoute('HOME');
        }
    }, [currentLocation.pathname])

    return (
        <Provider store={store}>
            <Header setCurrentHeader={setCurrentHeader} />
            <Breadcrumb currentRoute={currentRoute} header={currentHeader} />
            <Outlet />
            <Footer />
        </Provider>
    )
}

export default RouteLayout;