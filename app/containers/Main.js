'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import {bindCreators} from 'redux';

import {ActionCreators} from '../actions'

class Main extends Component {

	componentDidMount() {
	  console.log(this.props)
	  this.props.state.addForm.name //value name of form in initialState
	}

  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = state => ({
	state: state
});
 
const mapDispatchToProps = dispatch => ({
  	actions: bindCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);