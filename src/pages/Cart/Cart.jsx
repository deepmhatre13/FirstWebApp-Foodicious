import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cartItem, food_list, RemoveCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    if (cartItem && cartItem[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className="cart-items-item">
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>${item.price * cartItem[item._id]}</p>
                                    <p onClick={() => RemoveCart(item._id)} className="cross">x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}INR</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? '0' : '2'}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? '0' : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder="Promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;