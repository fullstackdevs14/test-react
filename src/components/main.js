import React from 'react';
import PropTypes from 'prop-types';
import SidePanel from './side-panel/side-panel';
import '../assets/styles/main.css';

const Main = props =>
  <div className="main">
    <div className="bg-overlay"/>
    <SidePanel />
    <div className="content">
      {props.children}
    </div>
  </div>

Main.propTypes = {
  children: PropTypes.element.isRequired
}

export default Main;
