import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleState';
import { Button, Grid, Header, Image, Form, Segment, Message } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
  }

  signUpPage = () => {
    // this.props.simpleAction(this.state.count);
    this.props.history.push('/signup');
  }
    
    render() {
        return (
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>

      <Message>
        New to us?  <Button basic onClick={this.signUpPage}>Sign Up</Button>
      </Message>
    </Grid.Column>
  </Grid>
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