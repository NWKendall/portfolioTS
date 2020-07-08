import React from 'react';
import { useStyles } from './navbar.styles'


const NavBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.navbarContainer}>
            <h3 className={classes.name}>Nic Kendall</h3>
            <ul className={classes.navbar}>
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar
