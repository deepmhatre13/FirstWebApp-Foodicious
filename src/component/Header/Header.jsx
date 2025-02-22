import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './Header.css';

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `url(${assets.header_img})` }}>
            <div className="header-content">
                <h2>Welcome to Tomato Admin</h2>
                <p>Manage orders, products, and more.</p>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Header;
