import React from "react";
import './Css/NavBar.css'
const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">GameHere</a>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar