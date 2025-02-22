import React, { useContext } from "react";
import './PlaceOrder.css'
import { StoreContext } from "../../context/StoreContext";
 function PlaceOrder(){
    const {getTotalCartAmount}=useContext(StoreContext)
    return(
        <form className="place-order">
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
            </div>
            <input text="email" placeholder="Email address"></input>
            <input text="text" placeholder="Street"></input>
            <div className="multi-fields">
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="State"></input>
            </div>
            <div className="multi-fields">
                <input type="text" placeholder="Zip-Code"></input>
                <input type="text" placeholder="Country"></input>
            </div>
            <input type="text" placeholder="Phone"/>
            </div>
            <div className="place-order-right">
            <div className="cart-total">
                <h2>Card Total</h2>
                <div >
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                        <hr/>
                        </div>
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>{2}</p>
                        
                    </div>
                    <hr/>
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>${getTotalCartAmount()+2}</b>
                    </div>
                    
                </div>
                <button >PROCEED TO PAYMENT</button>
            </div>
        </div>
        </form>
    );
 }
 export default PlaceOrder