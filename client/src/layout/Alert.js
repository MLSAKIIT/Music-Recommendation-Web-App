import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <div className="alert-container" style={{position: 'relative', margin: 'auto'}}>
    <div key={alert.id} className={`alert alert-${alert.alertType}`} style={{position: 'absolute',width: '40%', textAlign: 'center',  marginLeft: '30%', marginTop: '2%'}}>
     {alert.msg}
    </div>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
