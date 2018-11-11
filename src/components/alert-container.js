import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeAlert } from '../store/actions';
import Alert from './alert';

class AlertContainer extends Component {
  remove = (id) => {
    this.props.removeAlert(id)
  }

  render() {
    const { list } = this.props;

    return (
      <div className="alert-container">
        {list.map((data) =>
          <Alert
            key={data.id}
            {...data}
            onClose={() => this.remove(data.id)}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.alert.list
});

const mapDispatchToProps = dispatch => ({
  removeAlert: (id) => dispatch( removeAlert(id) )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertContainer);