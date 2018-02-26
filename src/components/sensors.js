import React from 'react'
import _ from 'lodash'

export default (props) => {

  if(!props.sensors) {
    return(<div>Getting sensors data</div>)
  }

  return (
    <ul className="list-group list-group-sensors">
      {
        _.map(props.sensors, (sensor) => <li
        className="list-group-item d-flex justify-content-between align-items-center list-group-item-fade"
        key={sensor.name}>{sensor.name} <span className="badge badge-success badge-pill">{sensor.value}</span></li>)
      }
    </ul>
  )
}
