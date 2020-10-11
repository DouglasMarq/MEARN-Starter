import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../../actions/simpleState';
import MenuComponent from '../../component/Menu';
import classes from './index.module.css';
import backgroundImage from '../../../assets/img/home-background.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps);
  }

  loginPage = () => {
    // this.props.simpleAction(this.state.count);
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <MenuComponent history={this.props.history} />
            <img src={backgroundImage} className={classes['backgroundImage']} alt={'Background'}/>
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
)(Home);
