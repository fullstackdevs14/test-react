import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LogoIcon from '../assets/images/care_3_logo.png';
import '../assets/styles/alert.css';
import { noop } from '../utils';

class Alert extends Component {

  state = {
    visible: false
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 100);
  }
  
  close = () => {
    this.setState({
      visible: false
    });

    setTimeout(() => this.props.onClose(), 500);
  }

  render() {
    const { title, subtitle, message } = this.props;
    const { visible } = this.state;

    return (
      <ReactCSSTransitionGroup
        transitionName='slideIn'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {visible &&
          <div className="alert">
            <div className="left">
              <div className="logo">
                <img src={LogoIcon} alt=""/>
              </div>
              <div className="message-block">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
                <div className="message">{message}</div>
              </div>
            </div>
            <div className="right">
              <button
                className="alert-button top"
                onClick={this.close}
              >
                Close
              </button>
              <button className="alert-button bottom">Settings</button>
            </div>
          </div>
        }
      </ReactCSSTransitionGroup>
    );
  }
}

Alert.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
}

Alert.defaultProps = {
  title: '',
  subtitle: '',
  message: '',
  onClose: noop
}

export default Alert;
