import React from "react";
import './Css/NavBar.css'
const NavBar = ( {currentUserID}) => {

    return (
        <nav className="navbar">
            <a href="login" className="logo">GameGrotto</a>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    {currentUserID === ''
                    ?<li><a href="#">Profile</a></li> 
                    :<li><a href="#">{currentUserID}</a></li>
                    }
                    <li><a href="#">Support</a></li>
                    {currentUserID === ''
                    ?<li><a href="login">Sign In</a></li>
                    :<li><a href="login">Sign Out</a></li>
                    }
                </ul>
            </div>
        </nav>
    )
}


export default NavBar