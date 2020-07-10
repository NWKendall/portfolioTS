import React from 'react';
import { AppBar, Toolbar, Typography, Tooltip, Icon } from '@material-ui/core';
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
                <LinkedInIcon aria-label="LinkedIn" className={classes.icon}>LinkedIn</LinkedInIcon>
                <FileCopyIcon className={classes.icon}>Resume</FileCopyIcon>
                <Tooltip title="nic.kendall.dev@protonmail.com" className={classes.icon}>
                    <EmailIcon />                
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
