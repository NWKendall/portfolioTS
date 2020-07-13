import React from "react";
import "./navbar.styles.css";
import { Tooltip } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <h3 className="myName">Nic Kendall</h3>
      <nav className="navbar">
        <Tooltip title="www.linkedin.com/in/NWKendall">
          <a className="icon" href="https://linkedin.com/in/nwkendall">
            <LinkedInIcon aria-label="LinkedIn">LinkedIn</LinkedInIcon>
          </a>
        </Tooltip>
        <Tooltip title="Click to download PDF">
          <a className="icon">
            <FileCopyIcon>Resume</FileCopyIcon>
          </a>
        </Tooltip>
        <Tooltip title="nic.kendall.dev@protonmail.com">
          <a href="mailto:nic.kendall.dev@protonmail.com" className="icon">
            <EmailIcon />
          </a>
        </Tooltip>
      </nav>
    </div>
  );
};

export default NavBar;
