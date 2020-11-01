import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

console.log(signInWithGoogle);
export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (e) {
      console.log(e)
    }
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <Button type="submit"> Sign In</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}> Sign In Google</Button>
          </div>
        </form>
      </div>
    );
  }
}
