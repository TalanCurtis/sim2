import React, { Component } from 'react';
import './Auth.css';
import logo from '../../images/auth_logo.png';

class Auth extends Component {

    handleLogin() {
        // if account exist loggin
        // else user does not exist error
        console.log('handle login')
        this.props.history.push('/Dashboard')

    }
    handleRegister() {
        // register account exist loggin
        // normaly can check to see if email exists or accout name
        console.log('handle Register')
        this.props.history.push('/Dashboard')
    }

    render() {
            return (
                <div className="Auth">
                    <img src={logo} alt=''></img>
                    <h2>UserName</h2>
                    <input type="text" />
                    <h2>Password</h2>
                    <input type="password" />
                    <div>
                        <button onClick={() => (this.handleLogin())}>Login</button>
                        <button onClick={() => (this.handleRegister())}>Register</button>
                    </div>
                </div>
            )
        }
}

export default Auth
