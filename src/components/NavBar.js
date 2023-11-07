//import css-style
import  "./navbar_style.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import SignUp from "./SignUp";
import SignUpForm from "./SignUpForm";




export default function Navbar(){
    const [state, setState] = useState({clicked:false});
    const [visible, setVisible] = useState(false);
    

    function handleClick(){
        setState({clicked: !state.clicked})
    }

    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Verne</h1>
            
            <div className="menu-icon" onClick={handleClick}>
                <i className={state.clicked ? "fas fa-times":"fas fa-bars"}></i>
            </div>
            
            <ul className={state.clicked ? "nav-menu active":"nav-menu"}>
            {/* map through the menu items */}{
                MenuItems.map((item, index) => {
                    return(
                        <li key={index} >
                            <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
                        </li>
                    );
                })}
                <div>
                    <button onClick={()=>setVisible(true)}>Sign Up</button>
                    <SignUp open={visible} toggleModal={()=>setVisible(false)}>
                        <SignUpForm/>
                    </SignUp>
                </div>
            </ul>
        </nav>
    )
    
}