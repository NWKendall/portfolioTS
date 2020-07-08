import React from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core';
import { useStyles } from './navbar.styles';


const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar className={classes.navbarContainer}>
                <Typography className={classes.name}>Nic Kendall</Typography>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contact</MenuItem>
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
