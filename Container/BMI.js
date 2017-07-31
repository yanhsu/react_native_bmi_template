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
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
export default class BMI extends Component {
  constructor(props){
      super(props);
      this.state = {
          height:"",
          width:"",
      }
  }
    getBMI = () => {
        let h = this.state.height/100;
        let w = this.state.weight;
        return w/(h*h);
    }
    printBMI = () =>{
        bmi = this.getBMI();
        Alert.alert('BMI檢測',
          '您的BMI為'+bmi,
          [
            {text:'確認',onPress:()=>{}}
          ]
        );
    }  
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
            <Text style={styles.text}>
            Please input your height
            </Text>
            <TextInput style={styles.input}
                onChangeText = {(val)=>{this.setState({height:val});}}
            />
            <Text style={styles.text}>
                Please input your weight
            </Text>
            <TextInput style={styles.input}
                onChangeText  ={(val)=>{this.setState({weight:val});}}
            />
            <View style={{flex:3}}>
                <TouchableOpacity style={styles.button} onPress={this.printBMI}>
                <Text style={styles.buttonText}>
                    calculate your bmi
                </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    fontSize: 14,
    alignSelf: 'auto',
    textAlign: 'center'
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#333333',
    marginTop: 25,
  },
  button: {
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 5,
  },
  buttonText: {
    fontSize: 14,
    alignSelf: 'center',
    backgroundColor: 'lightgreen',
    padding: 5
  }
});

//AppRegistry.registerComponent('react_native_bmi_template', () => react_native_bmi_template);
