import React, { Component } from 'react';
import { connect } from 'react-redux';
// methods
import { getUser } from '../actions/userAction';
import { toggleSwitchValue } from '../actions/switchesAction';

// compoenents
import Sensors from './sensors';
import Switches from './switches';


class App extends Component {
  
  onSwitchClick = (id, value) => {
    value = (value) ? 1 : 0;
    this.props.toggleSwitchValue(id, value)
  }
  onSensorClick = (id) => {
    this.props.toggleSwitchValue(id)
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h3>Active sensors</h3>
            <ul className="list-group list-group-sensors">
              <Sensors sensors={this.props.sensors} onClick={this.onSensorClick} />
            </ul>
          </div>
          <div className="col-sm-6 col-sm-offset-3">
            <h3>Manual switches</h3>
            <ul className="list-group list-group-sensors">
              <Switches switches={this.props.switches} onClick={this.onSwitchClick}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    switches: state.switches,
    sensors: state.sensors
  }
}

// map, dispatch
export default connect(mapStateToProps, { getUser, toggleSwitchValue }) (App);
