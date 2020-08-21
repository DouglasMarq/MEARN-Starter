import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleState';
import { Switch, Router, Route } from 'react-router-dom';
import { history } from "./store";
import Home from './components/Home/'

// const mapStateToProps = state => ({
//   ...state
// })

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
  }

  simpleAction = () => {
    // this.props.simpleAction(this.state.count);    
    this.props.history.push('/test');
  }
 render() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Home} />
      </Switch>
    </Router>
  );
 }
}
export default connect(({
  simpleState
}) => ({
  "simple": simpleState
}), {
  simpleAction
})(App);