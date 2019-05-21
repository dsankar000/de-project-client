import React, { Component } from "react";

import  myuserService from "./userService";

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
        fname: "",
        email:"",
        password:"",
        role:"Admin"
    };
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uService = myuserService;
  }

  handleFNameChange(event) {
   this.setState({fname: event.target.value});
  }
  handleEmailChange(event) {
   this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
   this.setState({password: event.target.value});
  }
  handleRoleChange(event) {
   this.setState({role: event.target.value});
  }

   handleSubmit(event) {
     event.preventDefault();
     this.uService.addUser(this.state.fname,this.state.email,this.state.password,this.state.role);
     this.setState({fname: "",email:"",password:"",role:"Admin"});
     event.target.reset();
     /*alert('Your role is: ' + this.state.role);*/
   }

  render() {
      return (
        <div>
          <h2>Create User Form</h2>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="fname"
              value={this.state.fname} onChange={this.handleFNameChange}/><br/>
            </label>
            <br/>
            <label>
              Email:
              <input type="text" name="email"
              value={this.state.email} onChange={this.handleEmailChange}/><br/>
            </label>
            <br/>
            <label>
              Password:
              <input type="password" name="password"
              value={this.state.password} onChange={this.handlePasswordChange}/><br/>
            </label>
            <br/>
            <label>
              Role:
              <select value={this.state.role} onChange={this.handleRoleChange}>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Professor">Professor</option>
            </select>
            <br/>
            </label>
            <br/>
            <input type="submit" value="Create" />
          </form>
        </div>
      );
    }
  }
  export default CreateUser;
