import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleState';
import { Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import classes from './login.module.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.simple.count || 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps);
  }

  signUpPage = () => {
    this.props.simpleAction(this.state.count);
    this.props.history.push('/signup');
  };

  render() {
    return (
      <div>
        <Button onClick={this.signUpPage}>aaaa</Button>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>
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
)(Login);
