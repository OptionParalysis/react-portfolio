import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

    menuClick(event) {
        let toggle = document.getElementById('checkbox-toggle');
        if(toggle.checked === true) {
            toggle.checked = false;
        } else {
            toggle.checked = true;
        }
    }
    
    render(){
        return(
            <nav className="menu">
                <div className="nav-wrap">
                    <div className="nav-inner">
                        <ul role="navigation">
                            <li>
                                <NavLink 
                                    to="/" 
                                    exact 
                                    activeClassName="selected" 
                                    tabIndex="-1"
                                    onClick={this.menuClick}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about" 
                                    exact 
                                    activeClassName="selected" 
                                    tabIndex="-1"
                                    onClick={this.menuClick}>About</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/work" 
                                    exact 
                                    activeClassName="selected" 
                                    tabIndex="-1"
                                    onClick={this.menuClick}>Work</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    exact 
                                    activeClassName="selected" 
                                    tabIndex="-1"
                                    onClick={this.menuClick}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}