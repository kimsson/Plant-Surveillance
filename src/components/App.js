import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
// methods
import { getUser } from '../actions/userAction';
import { toggleSwitchValue } from '../actions/switchesAction';

// compoenents
import Sensors from './sensors';
import Switches from './switches';


class App extends Component {
  renderSensors () {
    const { sensors } = this.props

    return _.map(sensors, (sensor, key) => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-fade"
          key={key}>{sensor.name}
          <span className="badge badge-success badge-pill">{sensor.value}
          </span>
        </li>
      )
    })
  }
  onSwitchClick = (id, value) => {
    value = (value) ? 1 : 0
    console.log('onSwitchClick ', value);
    this.props.toggleSwitchValue(id, value)
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <ul className="list-group list-group-sensors">
              <Sensors sensors={this.props.sensors} />
            </ul>
          </div>
          <div className="col-sm-6 col-sm-offset-3">
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
