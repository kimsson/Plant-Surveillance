import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import Loader from './Loader';

import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
// methods
import { getLogs } from '../actions/logAction';

class Sensor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logs: null,
      chartLabels: [],
      chartData: []
    }
  }
  componentDidMount() {
    console.log('Component did mount ', this.props.match.params.id, ' ', this.props);
    this.props.getLogs(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
        // wait for user to get authenticated and try to load notes
        // console.log('nextProps ', nextProps);
        const { logs } = nextProps;
        if(!logs) return;
        this.setState({logs: _.reverse(logs.doc)});
        console.log(logs.doc[0]._id);
        // if (nextProps.notesLoading === -1 && nextProps.user !== null) {
        //     this.props.getNotes();
        // }

        let chartData = _.map(logs.doc, (data) => { return data.value });
        let chartLabels = _.map(logs.doc, (data) => { return moment(data.createdAt).format('h a') });

        this.state.chartLabels = chartLabels;
        this.state.chartData = chartData;
        this.setState({
          chartLabels,
          chartData
        })
        console.log(this.state);
    }

  render() {
    if(!this.state.logs) {
      return(<div className="container-fluid"><Loader /></div>)
    }

    return (
      <div className="container-fluid bg-gradient-info text-white">
      <Link to="/">{`Retun to surveillance`}</Link>
        <h2>{this.state.logs[0].name}</h2>
        <br />
        <Chart chartData={this.state.chartData} chartLabels={this.state.chartLabels} labels/>
        <ul className="list-group">
          {
            _.map(this.state.logs, (log, key) => <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-fade"
            key={key}><p>{log.value}</p><span>{moment(log.createdAt).fromNow()}</span></li>)
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    logs: state.logs
  }
}

// map, dispatch
export default connect(mapStateToProps, { getLogs }) (Sensor);
