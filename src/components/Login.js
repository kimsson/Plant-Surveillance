import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin, facebookLogin } from '../actions/userAction';
import moment from 'moment';

class Login extends Component {
  componentWillMount() {
    if(this.props.user !== null) {
      this.props.history.push('/');
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== null){
      nextProps.history.push('/');
    }
  }
  render() {

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 jumbotron" style={{marginTop:'-20px'}}>
            <h1>PLANT Surveillance</h1>
            <h2>{moment(new Date).format('MMMM Do')}</h2>
            <h4>Login with your favourite <b>Social Network</b> to start surveillance</h4>
          </div>
          <div className="col-sm-4 text-center">
            <button
            className="btn btn-danger btn-group-lg btn-lgn"
            onClick={this.props.googleLogin}>Google</button>
          </div>
          <br />
          <div className="col-sm-4 text-center">
            <button className="btn btn-success btn-group-lg btn-lgn"
            onClick={this.props.twitterLogin}>Twitter</button>
          </div>
          <br />
          <div className="col-sm-4 text-center">
            <button className="btn btn-primary btn-group-lg btn-lgn"
            onClick={this.props.facebookLogin}>Facebook</button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { googleLogin, twitterLogin, facebookLogin})(Login);
