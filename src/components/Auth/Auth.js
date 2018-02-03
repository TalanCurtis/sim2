import React, { Component } from 'react';
import './Auth.css';
import logo from '../../images/auth_logo.png';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    handleLogin() {
        console.log('handle login')
        let { username, password } = this.state
        // Create body to send in the post
        let body = {
            username: username,
            password: password
        }
        // make a call to the api
        axios.post('/api/login', body)
            // if i get a good response run then
            .then(res => { this.props.history.push(`/Dashboard/${res.data.id}`) })
            // if its an error or bad response run catch
            .catch(() => { this.setState({ error: true }) })
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
                <h2>User Name</h2>
                <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                <h2>Password</h2>
                <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                <div>
                    <button onClick={() => (this.handleLogin())}>Login</button>
                    <button onClick={() => (this.handleRegister())}>Register</button>
                </div>
                {this.state.error ? <h3>Error: Wrong name or Password.</h3> : null}
            </div>
        )
    }
}

export default Auth
