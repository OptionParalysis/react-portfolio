import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  
  menuClick(event) {
    let toggle = document.getElementById('checkbox-toggle');
    let menuAria = document.getElementById('menu');

    if (toggle.checked === true) {
      toggle.checked = false;
      menuAria.setAttribute('aria-hidden', 'false');
    } else {
      toggle.checked = true;
      menuAria.setAttribute('aria-hidden', 'true');
    }
  }

  render() {
    return (
      <nav
        id="menu"
        className="menu"
        aria-hidden="true"
        aria-labelledby="checkbox-toggle"
      >
        <div className="nav-wrap">
          <div className="nav-inner">
            <ul role="navigation">
              <li>
                <NavLink
                  to="/home"
                  exact
                  activeClassName="selected"
                  onClick={this.menuClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  exact
                  activeClassName="selected"
                  onClick={this.menuClick}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  exact
                  activeClassName="selected"
                  onClick={this.menuClick}
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  exact
                  activeClassName="selected"
                  onClick={this.menuClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
