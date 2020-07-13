import React from "react";
import './navbar.styles.css';
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <nav className="navbar">
        <h3 className="myName">Nic Kendall</h3>
          <LinkedInIcon aria-label="LinkedIn" className="icon">
            LinkedIn
          </LinkedInIcon>
          <FileCopyIcon className="icon">Resume</FileCopyIcon>
          <EmailIcon target="__blank" href="www.google.com" />
      </nav>
    </div>
  );
};

export default NavBar;
