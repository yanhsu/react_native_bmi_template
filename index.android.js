/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BMI from './Container/BMI.js';
export default class react_native_bmi_template extends Component {
  render() {
    return (
      <BMI>
      </BMI>
    );
  }
}



AppRegistry.registerComponent('react_native_bmi_template', () => react_native_bmi_template);
