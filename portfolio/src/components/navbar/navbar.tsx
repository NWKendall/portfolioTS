import React from 'react';
import './navbar.styles.css';

const NavBar = () => {
    return (
        <div className="navbarContainer">
            <h3 className="name">Nic Kendall</h3>
            <ul className="navbar">
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar
