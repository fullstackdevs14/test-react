import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Switch from "react-switch";
import { noop } from '../../utils';
import '../../assets/styles/side-panel.css';


class PanelItem extends Component {

  state = {
    checked: false
  }

  handleChange = (checked) => {
    this.setState({ checked });
    this.props.toggle(checked);
  }

  render() {
    const { title, color, switchType } = this.props;
    const { checked } = this.state;

    const offColor = switchType==='green' ? '#deeeec' : '#f7e3e3';

    return (
      <div className="panel-item">
        <div className="title" style={{ color }}>{title}</div>
        { switchType &&
          <div className={cx('switch', switchType)}>
            <Switch
              onChange={this.handleChange}
              checked={checked}
              uncheckedIcon={false}
              checkedIcon={false}
              handleDiameter={28}
              onColor="#fff"
              offColor={offColor}
              width={48}
            />
          </div>
        }
      </div>
    );
  }
}

PanelItem.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  switchType: PropTypes.oneOf(['green', 'red', '']),
  toggle: PropTypes.func,
}

PanelItem.defaultProps = {
  color: '',
  switchType: '',
  toggle: noop
}

export default PanelItem;
