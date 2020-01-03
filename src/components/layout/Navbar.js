import React from "react";
import PorpTypes from 'prop-types';

const Navbar = ({icon, title})=> {
  return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </nav>
    );
}
Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon : 'fab fa-github'
};

Navbar.propTypes = {
    title:PorpTypes.string.isRequired,
    icon:PorpTypes.string.isRequired
}

export default Navbar;
