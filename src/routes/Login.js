import React, { Component } from 'react';
import firebase from 'firebase';

export default class Login extends Component {
    
    login(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
    
        promise
        .then(user => {
            var lout = document.getElementById('logout');
            var lin = document.getElementById('login');
            var google = document.getElementById('google');
            var signup = document.getElementById('signup');

            lout.classList.remove('hidden');
            lin.classList.add('hidden');
            google.classList.add('hidden');
            signup.classList.add('hidden');
        })
        .catch(e => {
          var err = e.message;
          console.log(err);
          this.setState({err: err});
        });
    }
    
    signup(){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
    
        promise
        .then(user => {
            var err = "Welcome "+ user.email;
            firebase.database().ref('users/'+user.uid).set({
                email: user.email
            });
            console.log(user);
            this.setState({
                err: err
            });
            this.props.onAuth(true);
        })
        .catch(e => {
            var err = e.message;
            console.log(err);
            this.setState(({
                err: err
            }));
        });
    }
    
    logout(){
        firebase.auth().signOut();
        var lout = document.getElementById('logout');
        var lin = document.getElementById('login');
        var google = document.getElementById('google');
        var err = 'You have been signed out.';
        this.setState({err: err});
        lout.classList.add('hidden');
        lin.classList.remove('hidden');
        google.classList.remove('hidden');
    }
    
    google(){
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithRedirect(provider);
    
        promise
        .then( result => {
            var user = result.user;
            console.log(result);
            firebase.database().ref('users/'+user.uid).set({
                email: user.email,
                name: user.displayName
            });

            var lout = document.getElementById('logout');
            var lin = document.getElementById('login');
            var google = document.getElementById('google');
            var signup = document.getElementById('signup');

            lout.classList.remove('hidden');
            lin.classList.add('hidden');
            google.classList.add('hidden');
            signup.classList.add('hidden');
            
        })
        .catch(e => {
            var msg = e.message;
            console.log(msg);
        });
    
    }
    
    constructor(props){
        super(props);
        this.state = {
            err: ''
        };
    
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);
    }

    render(){
        return(
            <div className="one-col-center">
                <h1 className="page-title">Login/Register</h1>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="Email">Email
                            <input id="email" ref="email" type="email" autoComplete="email" placeholder="Email" className="form-control" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password
                            <input id="pass" ref="password" autoComplete="password" type="password" placeholder="Password" className="form-control" />
                        </label>
                    </div>

                    <p>{this.state.err}</p>

                    <button 
                        id="login" 
                        type="button" 
                        onClick={this.login} 
                        className="btn btn-primary">Login</button>
                    <button 
                        id="signup" 
                        type="button" 
                        onClick={this.signup} 
                        className="btn btn-primary">Sign Up</button>
                    <button 
                        id="logout" 
                        type="button" 
                        className="hidden btn btn-danger" 
                        onClick={this.logout}>Logout</button>
                    <button 
                        id="google" 
                        type="button"
                        className="btn btn-primary" 
                        onClick={this.google}>Sign In with Google</button>

                </form>
            </div>
        );
    }
}