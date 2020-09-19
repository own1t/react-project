// React
import React from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Material-ui
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MessageIcon from "@material-ui/icons/Message";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// CSS
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <Link to="/">
          <HomeIcon className="footer__icons" />
        </Link>

        <Link to="/profile">
          <AccountBoxIcon className="footer__icons" />
        </Link>

        <Link to="/messenger">
          <MessageIcon className="footer__icons" />
        </Link>

        <Link to="/more">
          <MoreHorizIcon className="footer__icons" />
        </Link>
      </div>
    </>
  );
}

export default Footer;
