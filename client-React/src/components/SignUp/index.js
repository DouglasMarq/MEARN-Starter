import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "../../actions/simpleState";
import {
  Button,
} from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.simple.count || 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
  }

  loginPage = () => {
    this.props.simpleAction(this.state.count);
    this.props.history.push("/login");
  };

  render() {
    return <div>
      <Button onClick={this.loginPage}></Button>
    </div>;
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
