import React from "react";
import './Footer.css';
import { assets } from "../../../../food-delivery/src/asssets/assets";
function Footer(){
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.foodicious} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis expedita impedit obcaecati, optio velit eveniet adipisci harum possimus repudiandae ratione. Dicta, officia quam saepe placeat aliquid velit illum quis dignissimos?</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt=""/>
                         <img src={assets.twitter_icon} alt=""/>
                        <img src={assets.linkedin_icon} alt=""/>
                        

                    </div>
                </div>
                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-222-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                Copyright 2025 @ Foodicious.com - All Right Reserved.
            </p>
        </div>
    );
}

export default Footer