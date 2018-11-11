import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SidePanel from './side-panel/side-panel';
import { toggleSidepanel } from '../store/actions';
import '../assets/styles/main.css';

class Main extends Component {

  state = {
    entered: false
  }

  toggleSidepanel = () => {
    this.props.toggleSidepanel();
  }

  render() {
    const { sidepanel } = this.props;

    return (
      <div className="main">
        <ReactCSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {sidepanel &&
            <div className="bg-overlay"/>
          }
        </ReactCSSTransitionGroup>
        <SidePanel
          open={sidepanel}
          onClose={this.toggleSidepanel}
        />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.any.isRequired
}

const mapStateToProps = ({ ui }) => ({
  sidepanel: ui.sidepanel
})

const mapDispatchToProps = dispatch => ({
  toggleSidepanel: () => dispatch(toggleSidepanel())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
