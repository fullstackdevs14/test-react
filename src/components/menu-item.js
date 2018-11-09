import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { noop } from '../utils';
import '../assets/styles/menu-item.css';

const MenuItem = ({ icon, selected, handleClick }) =>
  <div className={cx('menu-item', { selected })} onClick={handleClick}>
    <img src={icon} alt="Menu Item"/>
  </div>

MenuItem.propTypes = {
  icon: PropTypes.string,
  selected: PropTypes.bool,
  handleClick: PropTypes.func
};

MenuItem.defaultProps = {
  icon: '',
  selected: false,
  handleClick: noop
};

export default MenuItem