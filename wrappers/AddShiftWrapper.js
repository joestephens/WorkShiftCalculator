import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  DatePickerIOS,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Button from 'apsl-react-native-button'

const styles = require('../styles/');
var moment = require('moment');
var Shift = require('../models/shift.js');
var Realm = require('realm');
var AddShift = require('../pages/addshift.ios.js');

class AddShiftWrapper extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    showStartDatePicker: false,
    showEndDatePicker: false,
    minsBreak: "0",
    hourlyRate: "0.00"
  }
  handleStartDateChange = (date) => {
    if (date > this.state.endDate) {
      this.setState({endDate: date});
    }

    this.setState({startDate: date});
  }
  handleEndDateChange = (date) => {
    this.setState({endDate: date});
  }
  handleChangeBreak = (text) => {
    this.setState({minsBreak: text});
  }
  handleChangeHourlyRate = (text) => {
    this.setState({hourlyRate: text});
  }
  handleStartDateFocus = () => {
    this.state.showStartDatePicker
      ? this.setState({showStartDatePicker: false})
      : this.setState({showStartDatePicker: true})
  }
  handleEndDateFocus = () => {
    this.state.showEndDatePicker
      ? this.setState({showEndDatePicker: false})
      : this.setState({showEndDatePicker: true})
  }
  handleAddShift = () => {
    let realm = new Realm({schema: [Shift]});

    realm.write(() => {
      let newShift = realm.create('Shift', {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        minsBreak: parseInt(this.state.minsBreak),
        hourlyRate: parseFloat(this.state.hourlyRate)
      });
    });

    this.props.navigator.pop();
  }
  render() {
    return (
      <AddShift
        onStartDateChange={this.handleStartDateChange}
        onEndDateChange={this.handleEndDateChange}
        onChangeBreak={this.handleChangeBreak}
        onChangeHourlyRate={this.handleChangeHourlyRate}
        onStartDateFocus={this.handleStartDateFocus}
        onEndDateFocus={this.handleEndDateFocus}
        onAddShift={this.handleAddShift}
        data={this.state} />
    );
  }
};

module.exports = AddShiftWrapper;
