import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import Button from "./Button";
import Input from "./Input";

export default class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            required
            onChange={this.handleChange}
          />
          <Input
            type="email"
            name="email"
            value={email}
            label="Email"
            required
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Password"
            required
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            required
            onChange={this.handleChange}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}
