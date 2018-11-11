import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../assets/styles/alert.css';

class AlertButton extends Component {
  state = {
    pressed: false
  };

  handleMouseDown = () => {
    console.log('Mouse Down');
  }

  handleMouseUp = () => {
    console.log('Mouse Up');
  }

  handleMouseEnter = () => {
    console.log('Mouse Enter');
  }

  handleMouseLeave = () => {
    console.log('Mouse Leave');
  }

  render() {
    const { pressed } = this.state;
    const { label } = this.props;

    return (
      <div
        className={cx('alert-button', { pressed })}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span>{label}</span>
      </div>
    )
  }

}


AlertButton.propTypes = {
  label: PropTypes.string.isRequired
}

export default AlertButton;
