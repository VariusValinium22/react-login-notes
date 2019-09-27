import React from "react";
//import CryptoJS from "crypto-js";
import { userService } from "../backend/backend";
//import SocialLogin from "./socialLogin";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert("handlesubmit");
    // alert();
    // var strongPass = CryptoJS.MD5(this.state.password);
    // alert("we've hashed the password" + strongPass);
    userService.LoginUser(this.state.username, this.state.password);
  //  alert("got to the");
    this.props.loginHandler();
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginBox">
        
        <form onSubmit={this.handleSubmit}>
          Login: <br />
          <label>
            Username:
            <input
              id="usernameVal"
              type="text"
              // value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              id="passwordVal"
              type="password"
              //value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          Forgot Password?
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
