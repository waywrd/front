import React, { Fragment, Component } from "react";
import GetUsers from "../components/GetUsers";

import AddUser from "../components/AddUser";
import "../styles/home.css";
import AuthContext from "../context/auth-context";

class Home extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <Fragment>
        <AddUser />
        <GetUsers />
      </Fragment>
    );
  }
}

export default Home;
