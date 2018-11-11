import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import PanelHeader from './panel-header';
import PanelSectionHeader from './panel-section-header';
import PanelItem from './panel-item';
import { noop } from '../../utils';
import '../../assets/styles/side-panel.css';


class SidePanel extends Component {
  render() {
    const { open, onClose } = this.props;

    return (
      <div className={cx('side-panel', { open })}>
        <PanelHeader title="Settings" onClose={onClose}/>
        <PanelSectionHeader title="notifications" />
        <div className="section">
          <PanelItem title="New Messages" switchType="green"/>
          <div className="divider" />
          <PanelItem title="Action Reminders" switchType="red"/>
        </div>
        <PanelSectionHeader title="care3" />
        <div className="section">
          <PanelItem title="About Us" color="#4aafb7"/>
          <div className="divider" />
          <PanelItem title="Privacy Policy" color="#4aafb7"/>
          <div className="divider" />
          <PanelItem title="Terms and Conditions" color="#4aafb7"/>
          <div className="divider" />
        </div>
      </div>
    )
  }
}

SidePanel.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func
}

SidePanel.defaultProps = {
  onClose: noop
}

export default SidePanel;
