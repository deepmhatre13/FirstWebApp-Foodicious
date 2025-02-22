import React from "react";
import './ExploreMenu.css'
import { menu_list } from "../../../../food-delivery/src/asssets/assets";
function ExploreMenu({category,setCategory}){
    return(
        <div className="exploremenu" id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="exploremenu-text">Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy you</p>
        
        <div className="exploremenu-list">
    {menu_list.map((item, index) => (
        <div 
            key={index} 
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))} 
            className="exploremenu-list-item"
        >
            <img 
                className={category === item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt={item.menu_name} 
            />
            <p>{item.menu_name}</p>
        </div>
    ))}
</div>

    </div>
    );
}
export default ExploreMenu