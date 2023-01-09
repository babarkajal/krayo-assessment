import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { SaveUserDetails } from "../Actions/AppActions";
import { connect } from "react-redux";
// client id 788814447502-pgjf37bvu00t8bsgvr8fdlv65on9qj2b.apps.googleusercontent.com
// secret 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
class Signup extends Component {
  state = {
    userObject: null,
  };
  componentDidMount() {
    /*global google*/
    window.onload = () => {
      google.accounts.id.initialize({
        client_id:
          "788814447502-pgjf37bvu00t8bsgvr8fdlv65on9qj2b.apps.googleusercontent.com",
        callback: (response) => {
          console.log(response.credential);
          let userObject = jwtDecode(response.credential);
          console.log(userObject);
          this.setState({ userObject });
          this.props.SaveUserDetails(userObject);
        },
      });
      google.accounts.id.renderButton(document.getElementById("sign-in"), {
        theme: "outline",
        size: "large",
      });
    };
  }
  render() {
    return (
      <div className="signup">
        <h1>Welcome! Sign in with google to access the portal</h1>
        <div id="sign-in"></div>
      </div>
    );
  }
}

export default connect(null, { SaveUserDetails })(Signup);
