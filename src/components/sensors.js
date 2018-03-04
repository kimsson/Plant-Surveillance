import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom';
export default (props) => {

  if(!props.sensors) {
    return(<div>Getting sensors data</div>)
  }
  
  return (
    <ul className="list-group list-group-sensors">
      {
        _.map(props.sensors, (sensor) => <li
        className="list-group-item d-flex justify-content-between align-items-center list-group-item-fade"
        key={sensor.name}><Link to={`/${sensor.id}`}>{sensor.name} </Link><span className="badge-pill badge progress-bar-success">{sensor.value}</span></li>)
      }
    </ul>
  )
}
