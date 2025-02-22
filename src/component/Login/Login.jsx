import React, { useState } from "react";
import './Login.css';
import { assets } from "../../../../food-delivery/src/asssets/assets";

function Login({setShowLogin}){
    const[currState,setCurrState]=useState("Login")
    return(
        <div className="login">
         <form  className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="Close login modal"/>
            </div>
            <div className="login-input">
                {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required/>}
              
                <input type="email" placeholder="Your email" required />
                <input type="password" placeholder="Your password" required/>

            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>By continuing ,I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login" 
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            : <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
            
           
         </form>
        </div>
    );
}
export default Login