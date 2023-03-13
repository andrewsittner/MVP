import React from "react";
import './Css/NavBar.css'
import { Link } from "react-router-dom";
const NavBar = ( {currentUserID}) => {

    return (
        <nav className="navbar">
            <Link className="logo" to="login">Game Grotto</Link>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    {currentUserID === ''
                    ?<li><a href="#">Profile</a></li> 
                    :<li><a href="#">{currentUserID}</a></li>
                    }
                    <li><a href="#">Support</a></li>
                    {currentUserID === ''
                    ?<li><Link to="login">Sign In</Link></li>
                    :<li><Link to="login">Sign Out</Link></li>
                    }
                </ul>
            </div>
        </nav>
    )
}


export default NavBar