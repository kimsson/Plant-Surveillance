import React from 'react'
import _ from 'lodash'

export default (props) => {

  if(!props.switches) {
    return(<div>Getting switches data</div>)
  }
  const toggleValue = (val) => {
    return (val) ? 'ON' : 'OFF'
  }
  return (
    <ul className="list-group">
      {
        _.map(props.switches, (pswitch) => <li
        className="list-group-item d-flex justify-content-between align-items-center list-group-item-fade"
        key={pswitch.name}
        type="button"
        onClick={props.onClick.bind(this, pswitch.id, !pswitch.value)}>{pswitch.name}
        <span className="badge progress-bar-danger">{toggleValue(pswitch.value)}</span></li>)
      }
    </ul>
  )
}
