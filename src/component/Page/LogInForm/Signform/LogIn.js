import React from 'react'
import { Link } from 'react-router-dom'

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div id="login">
        <h1>Login</h1>
        <form>
          <div className="loginGroup">
          <label>Enter your email
            <input 
            name="email"
            placeholder='your email here' 
            value={this.state.email} 
            onChange={e => this.change(e)} /> 
           </label>
           </div>
           <div className="loginGroup">
         <label>Enter your password
        <input 
        name="password"
        placeholder='your password' 
        value={this.state.password} 
        onChange={e => this.change(e)} /> 
        </label>
        </div>
        <div className="loginCheckbox">
            <input className="checkbox" type="checkbox" name="rememberMe"/>
            <p>Remember me</p>
        </div>
      </form>
      <button onClick={() => onsubmit()}>Login</button>
      <p>
        <Link to="/resetPassword">
          Reset your password
        </Link>
      </p>
      </div>
    )
  }
}

export default LogIn