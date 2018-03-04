import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class  Header extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <Link className="navbar-brand" to="/">
              Plant Surveillance
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            
            {

              this.props.user  === null ? (
                <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/login">login</Link>
                </li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                <li className="breadcrumb-item"><Link to="/">Surveillance</Link></li>
                <li className="breadcrumb-item"><Link to="/">How</Link></li>
                <li className="breadcrumb-item"><Link to="/" onClick={() => this.props.logout()}><span>Logout  </span><img className="avtar img-circle" alt="" width="24px" height="24" src={this.props.user.photoURL}/></Link></li>
                </ul>
              )
            }
            
          </div>
        </div>
      </nav>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, {getUser, logout})(Header);
