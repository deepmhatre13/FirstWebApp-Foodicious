import { createContext, useState, useEffect } from "react";
import { food_list } from "../../../food-delivery/src/asssets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);

    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };

    const getTotalCartAmount = () => {
        return Object.keys(cartItem).reduce((total, itemId) => {
            const itemInfo = food_list.find((product) => product._id === itemId);
            return itemInfo ? total + itemInfo.price * cartItem[itemId] : total;
        }, 0);
    };

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
