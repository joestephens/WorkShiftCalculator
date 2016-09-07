import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shiftsContainer: {
    flex: 1,
    marginTop: 10
  },
  jumbotron: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flex: 1
  },
  formLabel: {
    padding: 10,
    marginTop: 11,
    marginBottom: 1,
    marginLeft: 1,
    marginRight: 1,
    fontWeight: 'bold',
    fontSize: 11
  },
  formInput: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 10,
    margin: -1
  },
  formDatePicker: {
    marginLeft: -1,
    marginRight: -1,
    backgroundColor: '#F9F9F9',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  formButton: {
    backgroundColor: '#A20025',
    borderRadius: 0,
    padding: 10,
    marginTop: 21,
    marginBottom: 0,
    marginLeft: -1,
    marginRight: -1,
    borderWidth: 0
  },
  formButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  monthHeader: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  shift: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  shiftDate: {
    padding: 10,
    backgroundColor: '#A20025',
    width: 60,
    height: 60
  },
  shiftDayText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  shiftDateText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  shiftInfo: {
    marginLeft: 20
  },
  shiftHeader: {
    fontSize: 18
  },
  shiftBreak: {
    color: '#666'
  }
});

module.exports = styles;
