import React from "react";
import CryptoJS from 'crypto-js';
//import ReactDOM from "react-dom";
import { userService } from "../backend/backend"
//import SocialLogin from "./socialLogin"

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    userService.CreateUser(
    this.state.username,
    this.state.password,
    this.state.Email
  );
  
  e.preventDefault();
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })   
  };
  
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  };
  
  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  };



  render() {
    return (
    <div className="createuser">
    <form onSubmit={this.handleSubmit}>
    <label>
      Username:
      <input id="usernameVal" type="text" onChange={ this.handleUsername } />
    </label><br /><br />
    <label>
      Password:
      <input id="passwordVal" type="password" onChange={ this.handlePassword } />
    </label><br /><br />
    <label>
      Email:
      <input id="emailVal" type="text" onChange={ this.handleEmail } />
    </label><br /><br />
    <input type="submit" value="Submit" />
    </form>
  
    </div>
    );
  }
}
export default CreateUser;
