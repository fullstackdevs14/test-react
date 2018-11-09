import React from 'react';
import PropTypes from 'prop-types';
import XIcon from '../../assets/images/x.png';

const PanelHeader = ({ title }) =>
  <div className='panel-header'>
    <img className="close-icon" src={XIcon} alt=""/>
    <div className="title">{ title }</div>
  </div>

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PanelHeader;
