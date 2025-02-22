import React, { useContext, useState } from "react";
import { assets } from "../../../food-delivery/src/asssets/assets";
import './NavBar.css';
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

function NavBar({ setShowLogin }) {
    const [menu, setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { getTotalCartAmount } = useContext(StoreContext);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // Here you can implement actual search functionality
        }
    };

    return (
        <div className="navbar">
            {/* Logo */}
            <Link to='/'>
                <img src={assets.foodicious} alt="Foodicious Logo" className="logo" />
            </Link>

            {/* Navigation Menu */}
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href="#appdownload" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                <a href="#footer" onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
            </ul>

            {/* Right Section */}
            <div className="navbar-right">
                {/* Search Icon and Input */}
                <div className="navbar-search">
                    <img src={assets.search_icon} alt="Search Icon" onClick={() => setShowSearch(!showSearch)} />
                    {showSearch && (
                        <form onSubmit={handleSearchSubmit} className="search-form">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                autoFocus
                            />
                        </form>
                    )}
                </div>
                {/* Cart Icon */}
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="Cart Icon" />
                    </Link>
                    {getTotalCartAmount() > 0 && <div className="dot"></div>}
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    );
}

export default NavBar;
