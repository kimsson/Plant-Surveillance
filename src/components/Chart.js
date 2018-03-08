import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor (props) {
    super(props);

    this.state = {
      chartData: {
        labels: props.chartLabels,
        datasets: [
          {
          label: 'label',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,255,255,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          fontColor: 'red',
          data: props.chartData,

        }]
      }
    }
    console.log('props ', props);
  }
  componentDidMount() {
    // console.log('this.state ', this.state);
  }
  render () {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={50}
          height={300}
          options={{
            maintainAspectRatio: false,
            title: {
              display: false,
              text: 'title',
              fontSize: 25,
              fontColor: 'hotpink'
            },
            legend: {
              display: false,
              position: 'right'
            },
            label: {
              display: false
            },
            xAxes: [
              {
                ticks: {
                  autoSkip: false
                }
              }
            ]
          }} />
      </div>
    )
  }
}

export default Chart;
