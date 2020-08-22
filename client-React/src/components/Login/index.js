import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleState';
import { Button } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
  }

  simpleAction = () => {
    // this.props.simpleAction(this.state.count);
    this.props.history.push('/');
  }
    
    render() {
        return (
          <div className="App">
          <header className="App-header">
           <h1 className="App-title">Welcome to React Login Page</h1>
          </header>
          <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload
          </p>
          <Button onClick={this.simpleAction}>Test redux action</Button>
          <pre>
       {
        JSON.stringify(this.props.simple)
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
  })(Login);