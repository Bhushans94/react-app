import React from 'react';

import './Breadcrumb.css';
const Breadcrumb = ({ header, currentRoute }) => {
    return (
        <div className="mds-banner-wrapper">
            <h3 className="mds-banner-title">{header}</h3>
            <p className="mds-banner-breadcrumb">{currentRoute}</p>
        </div>
    )
}

export default Breadcrumb;