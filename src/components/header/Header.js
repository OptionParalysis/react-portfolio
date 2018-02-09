import React, { Component } from "react";

import Nav from "./Nav";
import LoginNav from "../../containers/LoginNav";
import "./header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      expand: false
    };
  }

  menuToggle = (e) => {
    let toggleBtn = document.getElementById('checkbox-toggle');
    let menuAria = document.getElementById('menu');
    let toggled = this.state.isOpen;
    let expanded = this.state.expanded;

    toggled = !this.state.isOpen;
    expanded = !this.state.expand;

    this.setState({
      isOpen: toggled,
      expand: expanded
    });

    toggleBtn.checked = this.state.isOpen;
    menuAria.setAttribute('aria-hidden', this.state.expand);
  };

  keyOpenMenu = (e) => {
    let toggleBtn = document.getElementById('checkbox-toggle');
    let menuAria = document.getElementById('menu');
    let menuLink = menuAria.getElementsByTagName('a')[0];
    let toggled = this.state.isOpen;
    let expanded = this.state.expanded;

    if (e.keyCode === 13) {
      toggled = !this.state.isOpen;
      expanded = !this.state.expand;

      this.setState({
        isOpen: toggled,
        expand: expanded
      });

      toggleBtn.checked = this.state.isOpen;
      menuAria.setAttribute('aria-hidden', this.state.expand);
      setTimeout(function() {
        menuLink.focus();
      }, 750);
      
    }
  };

  render() {
    return (
      <header>
        <div className="outer-menu">
          <input
            id="checkbox-toggle"
            className="checkbox-toggle"
            type="checkbox"
            aria-label="Menu"
            aria-controls="menu"
            onClick={this.menuToggle}
            onKeyDown={this.keyOpenMenu}
          />
          <div className="burger" aria-hidden="true">
            <div />
          </div>
          <Nav />
        </div>
        <LoginNav />
      </header>
    );
  }
}
