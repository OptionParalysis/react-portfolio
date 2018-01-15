import React, { Component } from 'react';
import * as firebase from 'firebase';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: ''
        };

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);
    }

    login(event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const lout = document.getElementById('logout');
        const lin = document.getElementById('login');
        const google = document.getElementById('google');
        const signup = document.getElementById('signup');

        // sign in with email and password
        auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                lout.classList.remove('hidden');
                lin.classList.add('hidden');
                google.classList.add('hidden');
                signup.classList.add('hidden');
            })
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            }
        );
    }

    signup() {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const lout = document.getElementById('logout');
        const lin = document.getElementById('login');
        const google = document.getElementById('google');
        const signup = document.getElementById('signup');

        if (email.length < 4) {
            this.setState({
                err: 'Please enter an email address.'
            });
        }

        if (password.length < 4) {
            this.setState({
                err: 'Please use a longer password.'
            });
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                let err = 'Welcome ' + user.email;
                firebase.database().ref('users/' + user.uid).set({
                    email: user.email,
                    name: user.displayName
                });
                console.log(user);
                this.setState({ err: err });

                lout.classList.remove('hidden');
                lin.classList.add('hidden');
                google.classList.add('hidden');
                signup.classList.add('hidden');
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === 'auth/weak-password') {
                    this.setState({
                        err: 'The password is too weak.'
                    });
                } else {
                    console.log(errorMessage);
                }
                console.log(error);
                }
            );
    }

    logout() {
        firebase.auth().signOut();
        const lout = document.getElementById('logout');
        const lin = document.getElementById('login');
        const google = document.getElementById('google');
        const err = 'You have been signed out.';
        this.setState({ err: err });
        lout.classList.add('hidden');
        lin.classList.remove('hidden');
        google.classList.remove('hidden');
    }

    google() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const promise = firebase.auth().signInWithRedirect(provider);
        promise.catch(e => {
            const msg = e.message;
            console.log(msg);
        });
    }

    componentWillMount() {
        firebase.auth().getRedirectResult()
        .then(result => {
            const user = result.user;
            console.log(result);
            firebase.database().ref('users/' + user.uid).set({
                email: user.email,
                name: user.displayName
            });
        })
        .catch(e => {
            const msg = e.message;
            console.log(msg);
        });
    }

    render() {
        return (
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