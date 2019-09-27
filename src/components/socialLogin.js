import React from 'react';

class SocialLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a href="" className="fb-login social-login">
        Login with Facebook
        </a>
        <p className="seperator">-OR-</p>
        <a href="" className="google-login social-login">
        Login with Google
        </a>
      </div>
    );
  }
}
export default SocialLogin;