import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Application }  from '../../modules/application-old/records';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import actions from '../../modules/actions';

import logo from '../../resources/logo.svg';
import './App.css';

function App(props) {
  
  const { application, dispatch } = props;
  const { flag } = application;
  const boundActions = bindActionCreators(actions, dispatch);  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We are in business.
        </p>

        <p>
          'Flag' status: {flag ? "true" : "false" }
        </p>
        <button
          onClick={boundActions.toggleFlag}
        > 
          Toggle 'flag'
        </button>
      </header>
    </div>
  );
}

// App.propTypes = {
//   application: ImmutablePropTypes.recordOf(Application).isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
