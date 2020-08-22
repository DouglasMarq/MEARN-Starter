import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleState';
import { Button, Icon, Label } from 'semantic-ui-react';

class Home extends Component {
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
    // this.props.history.push('/test'); 
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
          {/* <Button onClick={this.simpleAction}>Test redux action</Button> */}
          <Button onClick={this.simpleAction} as='div' labelPosition='right'>
            <Button icon>
              <Icon name='heart' />
                Like
            </Button>
          <Label as='a' basic pointing='left'>
            {this.props.simple.count}
          </Label>
          </Button>
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
  })(Home);