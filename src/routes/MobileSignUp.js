import Navbar from "../components/NavBar";
import fotocamera from "../asserts/fotocamera.jpg";

import "./msu_style.css";
import { useState } from "react";



export default function MobileSignUp(){
    const [state, setState] = useState("mobile-not-show");
    const [show, setShow]= useState("close-button-hidden");
    const [hid, setHidden] = useState(false);
    return (
        <>
            <Navbar/>
            <div className="mobile-container">
                <div className="mobile-sign-up">
                    <h1>Sign Up to Verne</h1>
                <form hidden={hid}>
                    <label >Name</label>
                    <input placeholder="Name"/>
                    <label >Email</label>
                    <input type='email' placeholder="example@domain.com"/>
                    <label >Password</label>
                    <input type='password' placeholder="Password"/>
                </form>
                <div className={state} >
                    <img  src={fotocamera} alt="foto" />
                </div>
                </div>
                <div className="rw-btn1">
                    <div className="sign-up-botton-mobile">
                        <button onClick={()=>{setState("mobile-show"); setShow("close-button"); setHidden(true)}}>Sign Up with Documents <i className="fa-solid fa-camera" /></button>
                    </div>
                    <div className={show}>
                        <button  onClick={()=>{setState("mobile-not-show"); setShow("close-button-hidden"); setHidden(false)}}>Close Camera</button>
                    </div>
                </div>
                
                <div className="sign-up-back">
                    <button >Sign Up</button>
                    <button ><a href="/">Back</a></button>
                </div>
            </div>
        </>
    );
}