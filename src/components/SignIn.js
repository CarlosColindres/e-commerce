import React, { Component } from "react";
import Input from "./Input";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
      e.preventDefault()
      this.setState({email: '', password:''})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleChange}>
            <Input
            label='Email'
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
            />
            <Input
            label='Password'
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
            
            />
        </form>
      </div>
    );
  }
}
