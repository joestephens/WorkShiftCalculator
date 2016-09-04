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

class AddShift extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    showStartDatePicker: false,
    showEndDatePicker: false,
    minsBreak: "0",
    hourlyRate: "0.00"
  }
  onStartDateChange = (date) => {
    this.setState({startDate: date});
  }
  onEndDateChange = (date) => {
    this.setState({endDate: date});
  }
  onChangeBreak = (text) => {
    this.setState({minsBreak: text});
  }
  onChangeHourlyRate = (text) => {
    this.setState({hourlyRate: text});
  }
  onStartDateFocus = () => {
    this.state.showStartDatePicker
      ? this.setState({showStartDatePicker: false})
      : this.setState({showStartDatePicker: true})
  }
  onEndDateFocus = () => {
    this.state.showEndDatePicker
      ? this.setState({showEndDatePicker: false})
      : this.setState({showEndDatePicker: true})
  }
  addShift = () => {
    let realm = new Realm({schema: [Shift]});

    realm.write(() => {
      let newShift = realm.create('Shift', {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        minsBreak: parseInt(this.state.minsBreak),
        hourlyRate: parseFloat(this.state.hourlyRate)
      });
    });
  }
  render() {
    var showStartDatePicker = this.state.showStartDatePicker ?
      <DatePickerIOS
        date={this.state.startDate}
        mode="datetime"
        onDateChange={this.onStartDateChange}
        style={styles.formDatePicker}
      /> : <View />

    var showEndDatePicker = this.state.showEndDatePicker ?
      <DatePickerIOS
        date={this.state.endDate}
        mode="datetime"
        onDateChange={this.onEndDateChange}
        style={styles.formDatePicker}
      /> : <View />

    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>START WORK:</Text>
          <TouchableHighlight onPress={this.onStartDateFocus} underlayColor="#F9F9F9">
            <TextInput
              style={styles.formInput}
              value={moment(this.state.startDate).format('llll')}
              editable={false}
            />
          </TouchableHighlight>
          {showStartDatePicker}
          <Text style={styles.formLabel}>FINISH WORK:</Text>
          <TouchableHighlight onPress={this.onEndDateFocus} underlayColor="#F9F9F9">
            <TextInput
              style={styles.formInput}
              value={moment(this.state.endDate).format('llll')}
              onFocus={this.onEndDateFocus}
              editable={false}
            />
          </TouchableHighlight>
          {showEndDatePicker}
          <Text style={styles.formLabel}>BREAK DURATION (IN MINUTES):</Text>
          <TextInput
            style={styles.formInput}
            value={this.state.minsBreak.toString()}
            onChangeText={this.onChangeBreak}
          />
          <Text style={styles.formLabel}>HOURLY RATE (FORMAT: 0.00):</Text>
          <TextInput
            style={styles.formInput}
            value={this.state.hourlyRate.toString()}
            onChangeText={this.onChangeHourlyRate}
          />
          <Button
            style={styles.formButton}
            textStyle={styles.formButtonText}
            onPress={this.addShift}>
            ADD SHIFT
          </Button>
        </View>
      </ScrollView>
    );
  }
}

module.exports = AddShift;
