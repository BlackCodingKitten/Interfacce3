import "./signup_style.css";

import * as ReactDOM from 'react-dom';


export default function SignUp({open ,children, toggleModal}){
    if(!open){
        return null;
    }
    return ReactDOM.createPortal(
        <>
        <div className="overlay">
            <div className="sign-up">
                {children}
            <div className="btn-in-row">
                    <button className="sign-up-btn" onClick={toggleModal}>Sign Up</button>
                    <button onClick={toggleModal}>Close</button>
            </div>
            </div>

        </div>           
        </>,
        document.getElementById('portal')
    );
}