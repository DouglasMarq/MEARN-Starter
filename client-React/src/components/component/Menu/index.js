import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './index.module.css';
import {
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Menu as MenuClosed, MenuOpen as MenuOpened } from '@material-ui/icons';
import { menuAction } from '../../../actions/menuState';
import { loginAction } from '../../../actions/loginState';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: this.props.menu.opened,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps);
  }

  handleClick = () => {
    this.state.opened = !this.props.menu.opened;
    this.props.menuAction(this.state.opened);
    console.log(this.props);
  };

  handleHomeButton = () => {
    // this.props.history.push('/');
    this.props.loginAction();
  };
  handleLoginButton = () => {
    this.props.history.push('/login');
    // this.props.loginAction();
  };
  handleContactButton = () => {
    this.props.history.push('/contact');
    // this.props.loginAction();
  };
  handleAboutButton = () => {
    this.props.history.push('/about');
    // this.props.loginAction();
  };

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes['menuButton']}
              color="inherit"
              aria-label="menu"
              onClick={this.handleClick}
            >
              {!this.state.opened ? <MenuClosed /> : <MenuOpened />}
            </IconButton>
            <Typography variant="h6" className={classes['title']}>
              Home
            </Typography>
            <Button color="inherit" onClick={this.handleLoginButton}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Menu
          id="simple-menu"
          keepMounted
          open={this.state.opened}
          onClose={this.handleClick}
          className={classes['menu']}
        >
          <MenuItem onClick={this.handleHomeButton}>Home</MenuItem>
          <MenuItem onClick={this.handleLoginButton}>Login</MenuItem>
          <MenuItem onClick={this.handleContactButton}>Contact</MenuItem>
          <MenuItem onClick={this.handleAboutButton}>About</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default connect(
  ({ menuState, loginState }) => ({
    menu: menuState,
    login: loginState,
  }),
  {
    menuAction,
    loginAction,
  }
)(MenuComponent);
