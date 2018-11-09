import React from 'react';
import PropTypes from 'prop-types';

const PanelHeader = ({ title }) =>
  <div className='panel-section-header'>
    {title}
  </div>

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PanelHeader;
