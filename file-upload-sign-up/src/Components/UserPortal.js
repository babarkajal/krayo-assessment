import React, { Component } from "react";
import { connect } from "react-redux";
import ListFiles from "./ListFiles";
import UploadFile from "./UploadFile";

class UserPortal extends Component {
  render() {
    const { userDetails } = this.props;
    return (
      <div className="user-portal">
        <div className="user-portal-heading">
          <img src={userDetails?.picture} alt="User Profile" />{" "}
          <span className="name">{userDetails?.name}</span>
        </div>
        <UploadFile />
        <ListFiles />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userDetails: state.appData.userDetails };
};

export default connect(mapStateToProps)(UserPortal);
