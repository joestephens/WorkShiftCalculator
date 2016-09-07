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

var AddShift = function (props) {
  var showStartDatePicker = this.props.data.showStartDatePicker ?
    <DatePickerIOS
      date={this.props.data.startDate}
      mode="datetime"
      onDateChange={this.props.onStartDateChange}
      style={styles.formDatePicker}
    /> : <View />

  var showEndDatePicker = this.props.data.showEndDatePicker ?
    <DatePickerIOS
      date={this.props.data.endDate}
      mode="datetime"
      onDateChange={this.props.onEndDateChange}
      style={styles.formDatePicker}
    /> : <View />

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>START WORK:</Text>
        <TouchableHighlight onPress={this.props.onStartDateFocus} underlayColor="#F9F9F9">
          <TextInput
            style={styles.formInput}
            value={moment(this.props.data.startDate).format('llll')}
            editable={false}
          />
        </TouchableHighlight>
        {showStartDatePicker}
        <Text style={styles.formLabel}>FINISH WORK:</Text>
        <TouchableHighlight onPress={this.props.onEndDateFocus} underlayColor="#F9F9F9">
          <TextInput
            style={styles.formInput}
            value={moment(this.props.data.endDate).format('llll')}
            onFocus={this.props.onEndDateFocus}
            editable={false}
          />
        </TouchableHighlight>
        {showEndDatePicker}
        <Text style={styles.formLabel}>BREAK DURATION (IN MINUTES):</Text>
        <TextInput
          style={styles.formInput}
          value={this.props.data.minsBreak.toString()}
          onChangeText={this.props.onChangeBreak}
          keyboardType="number-pad"
        />
        <Text style={styles.formLabel}>HOURLY RATE (FORMAT: 0.00):</Text>
        <TextInput
          style={styles.formInput}
          value={this.props.data.hourlyRate.toString()}
          onChangeText={this.props.onChangeHourlyRate}
          keyboardType="decimal-pad"
        />
        <Button
          style={styles.formButton}
          textStyle={styles.formButtonText}
          onPress={this.props.onAddShift}>
          ADD SHIFT
        </Button>
      </View>
    </ScrollView>
  );
}

module.exports = AddShift;
