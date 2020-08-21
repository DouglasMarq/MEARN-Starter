import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleState';

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
    this.props.simpleAction(this.state.count);    
  }
 render() {
  return (
   <div className="App">
    <header className="App-header">
     {/* <img src={logo} className="App-logo" alt="logo" /> */}
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <button onClick={this.simpleAction}>Test redux action</button>
    <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
   </div>
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
// export default connect(mapStateToProps, mapDispatchToProps)(App);