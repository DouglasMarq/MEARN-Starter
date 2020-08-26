import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "../../actions/simpleState";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
  }

  loginPage = () => {
    // this.props.simpleAction(this.state.count);
    this.props.history.push("/login");
  };

  render() {
    return <div></div>;
  }
}

export default connect(
  ({ simpleState }) => ({
    simple: simpleState,
  }),
  {
    simpleAction,
  }
)(Login);
