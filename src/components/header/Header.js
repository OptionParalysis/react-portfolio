import React, { Component } from 'react';

import Nav from './Nav';
import LoginNav from '../../containers/LoginNav';
import './header.css';

export default class Header extends Component {

    menuToggle = (e) => {
        let toggleBtn = document.getElementById('checkbox-toggle');
        if(e.keyCode === 13) {
            if(e.keyCode === 9) {
                document.querySelector('.nav-inner > ul > li').focus();
                console.log('focus');
            }
            return(toggleBtn.checked = !toggleBtn.checked);
        }
    }

    render(){
        return(
            <header>
                <div className="outer-menu">
                    <input 
                        id="checkbox-toggle" 
                        className="checkbox-toggle" 
                        type="checkbox" 
                        onKeyDown={this.menuToggle}
                    />
                    <div className="burger">
                        <div></div>
                    </div>
                    <Nav />
                </div>
                <LoginNav />
            </header>
        );
    }
}
