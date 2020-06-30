import React, { Component } from "react";
import styled, { createGlobalStyle  } from "styled-components";

import Button from "./Button";

const GlobalStyle = createGlobalStyle`
.dropdown-active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.dropdown-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .dropdown-list-item {
    padding: 12px 24px;
    color: #777;
    text-transform: capitalize;
  }
  
  .dropdown-list-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Dropmenu = styled.div`
  position: absolute;
  top: 54px;
  right: -16px;
  width: 220px;
  height: auto;
  z-index: 2;
  background-color: #fff;
  border-radius: 4px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: all .3s;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);

  :before {
    position: absolute;
    content: "";
    top: -6px;
    right: 30px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 6px solid #FFF;
}
`;

export class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShown: false
    };

    this.toggleMenuBound = this.toggleMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleMenu() {
    if (!this.state.menuActive) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleMenu();
  }

  render() {
    const { Type } = this.props;
    const { Label } = this.props;
    const { menuActive } = this.state;
    const menuLinks = this.props.links.map(item => (
      <li key={item.label}>{item.label}</li>
    ));
    return (
      <>
        <Type
          onClick={this.toggleMenuBound}
        >
          {" "}
          {Label}

        <Dropmenu
          ref={node => {
            this.node = node;
          }}
          className={`${menuActive ? "dropdown-active" : ""}`}
        >
        <ul class="dropdown-list">
          {menuLinks}
        </ul>
        </Dropmenu>
        </Type>

        <GlobalStyle/>
      </>
    );
  }
}

Dropdown.defaultProps = {
  Type: Button,
  Label: ""
};
