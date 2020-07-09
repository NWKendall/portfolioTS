import React from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Icon } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useStyles } from './navbar.styles';


const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.navbarContainer}>
            <Toolbar className={classes.navbar}>
                <Typography className={classes.name}>Nic Kendall</Typography>
                <LinkedInIcon aria-label="LinkedIn">LinkedIn</LinkedInIcon>
                <FileCopyIcon>Resume</FileCopyIcon>
                <EmailIcon>nic.kendall.dev@protonmail.com</EmailIcon>                
                <Icon></Icon>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
