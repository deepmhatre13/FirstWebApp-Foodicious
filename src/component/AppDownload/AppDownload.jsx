import React from "react";
import './AppDownload.css';
import { assets } from "../../../../food-delivery/src/asssets/assets";
function AppDownload(){
    return(
        <div className="appdownload" id="appdownload">
            <p>For Better Experience Download<br/>Foodicious App</p>
            <div className="appdownload-platform">
                <img src={assets.play_store} alt=""/>
                <img src={assets.app_store} alt=""/>
            </div>
        </div>
    );
}
export default AppDownload