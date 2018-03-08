import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return(
      <div className="outer">
        <div className="middle">
          <div className="spinner">
            <Spinner
            type="Audio"
            color="white"
            height="100"
            width="100"/>
          </div>
        </div>
      </div>
    )
  }
}
export default Loader;
