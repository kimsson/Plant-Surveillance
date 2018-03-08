import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getSwithes } from '../actions/switchesAction';
import { getSensors } from '../actions/sensorsAction';

import Loader from './Loader';

class LoadingComponent extends Component {
    componentWillMount() {
        const { userLoading, switchesLoading, sensorsLoading } = this.props;
        // if we havent tried to load the user, load user
        if (userLoading === undefined) {
            this.props.getUser();
        }

        // if we havent tried to get switches, load notes
        if (switchesLoading === undefined) {
            this.props.getSwithes();
        }

        // if we havent tried to get sensors, load notes
        if (sensorsLoading === undefined) {
            this.props.getSensors();
        }
    }

    componentWillReceiveProps(nextProps) {
        // wait for user to get authenticated and try to load notes
        if (nextProps.switchesLoading === -1 && nextProps.sensorsLoading === -1 && nextProps.user !== null) {
            this.props.getSwithes();
        }
    }

    render() {
        const { userLoading, switchesLoading, sensorsLoading, children } = this.props;
        /**
         * throughout the lifetime of app user and notes loading status will
         * keep toggling between true and false
         * when anything other than that toggling state such as true or false is in the state
         * that means the loading operation is setteled and not active
         * that time, show the enclosing components
         * for everything else and inbetween show Loading
         */
        if ((!userLoading && !switchesLoading && !sensorsLoading) || this.props.user === null) {
            return <div>{children}</div>;
        } else {
            return (
                <div className="container-fluid">
                    <Loader />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        userLoading: state.loading.user,
        switchesLoading: state.loading.switches,
        sensorsLoading: state.loading.sensors,
        user: state.user
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getSwithes, getSensors })(LoadingComponent));
