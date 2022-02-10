import React from "react";
import Logo from '../images/airbnb-logo.png'

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={Logo} alt="airbnb logo" className="nav--logo"/>
        </nav>
    )
}