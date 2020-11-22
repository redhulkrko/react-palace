import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLink,
  NavMenu,
} from "./NavbarElements";
import { Menu } from "@material-ui/icons";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      console.log("scroll");
    } else {
      setScrollNav(false);
      console.log("static");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            {/* <img src={require("../../images/logo.jpg")} alt="logo" /> */}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <Menu />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/about" activeStyle>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services" activeStyle>
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact-us" activeStyle>
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sign-up" activeStyle>
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
