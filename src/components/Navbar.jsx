import React from "react";
import SmaillLogo from "./SmaillLogo";

const Navbar = () => {
  return <nav>
    <div className="icon">
        <SmaillLogo/>
    </div>
    <div className="navLink">
        <ul>
            <li>Home</li>
            <li>Offer</li>
            <li>Pricing</li>
            <li>Guides</li>
            <li>Conjtact</li>
        </ul>
    </div>
    <div className="loginBtn">
        <button>Sign in</button>
        <button>Sign up</button>
    </div>
  </nav>;
};

export default Navbar;
