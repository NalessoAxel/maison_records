import React from 'react'

class Register extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onsubmit = (e) => {
    e.preventDefault()
    
  }
  render() {
    return (
      <div id="register">
        <h1>Register your account</h1>
          <form className="userCreate">
            <div className="createUserDetails">
              <label>Your Email
                <input 
                required name="email"
                placeholder='your email here'
                type="string" 
                value={this.state.email} 
                onChange={e => this.change(e)} 
                /> 
                </label>
            </div>
            <div className="createUserDetails">
              <label>Your first name
                <input 
                required name="firstName"
                placeholder='first name'
                type="string" 
                value={this.state.firstName} 
                onChange={e => this.change(e)} 
                /> 
                </label>
            </div>
            <div className="createUserDetails">
                <label>Your last name
                <input 
                name="lastName"
                placeholder='last name'
                type="string"
                value={this.state.lastName} 
                onChange={e => this.change(e)} 
                /> 
                </label>
            </div>
            <div className="createUserDetails">
              <label>Your password
                <input 
                name="password"
                placeholder='your password' 
                type="password"
                value={this.state.password} 
                onChange={e => this.change(e)} 
                /> 
                </label>
            </div> 
          </form>
          <button onClick={() => onsubmit()}>Create your account</button>
      </div>
    )
  }
}

export default Register
