import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleState";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { history } from "./store";
import Home from "./components/Home/";
import Login from "./components/Login/";
import SignUp from "./components/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(
  ({ simpleState }) => ({
    simple: simpleState,
  }),
  {
    simpleAction,
  }
)(App);
