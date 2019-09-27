import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import CreateUser from "./components/createUser";
import Login from "./components/login";
import Board from "./components/board";
import userService from "./backend/backend";
import Logout from "./components/logout"
//import Note from "./components/note";
//import Bootstrap from 'bootstrap';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  loginRouter() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/createuser">createuser</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>

          <Route
            path="/login"
            component={() => <Login loginHandler={this.logIn.bind(this)} />}
          />
          <Route path="/createUser" component={CreateUser} />
          <Route path="/board" component={Board} />
        </div>
      </Router>
    );
  }

  loggedInRouter() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Logout">Logout</Link>
            </li>

            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
          <Route
            path="/Logout"
            component={() => <Logout logoutHandler={this.logOut.bind(this)} />}
          />
          <Route path="/todo" component={Board} />
        </div>
      </Router>
    );
  }

  logIn() {
    alert("login");
    this.setState({
      loggedIn: true
    });
  }

  logOut() {
    userService.logOut();
    this.setState({
      loggedIn: false
    });
  }
  render() {
    let menu;

    if (this.state.loggedIn) {
      menu = this.loggedInRouter();
    } else {
      menu = this.loginRouter();
    }

    return <div>{menu}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
