import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class LoginNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            authenticated: false
        };
    }
    
    render(){
        return(
            <nav className="login-links">
                <ul>
                    <li>
                        {this.state.authenticated
                            ? (
                                <NavLink 
                                id="login-link"
                                to="/login" 
                                exact>Logout</NavLink>
                            ) : (
                                <NavLink 
                                id="logout-link"
                                to="/login" 
                                exact>Register/Login</NavLink>
                            )
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}