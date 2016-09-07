import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ListView,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/');
var Realm = require('realm');
var Shift = require('../models/shift');

var moment = require('moment');

let realm = new Realm({schema: [Shift]});

var Shifts = React.createClass({
  getInitialState: function () {
    return {
      shifts: realm.objects('Shift').sorted('startDate', true)
    };
  },
  render: function () {
    if (this.state.shifts.length === 0) {
      return (
        <View style={styles.container}>
          <View style={styles.jumbotron}>
            <Text style={styles.welcome}>
              No shifts recorded yet
            </Text>
            <Text style={styles.instructions}>
              To get started, click the Add button
            </Text>
          </View>
        </View>
      );
    } else {
      var shiftsByMonth = {};

      var groupByMonth = function(result) {
          var month = moment(result.startDate).format("MMMM YYYY");

          if (shiftsByMonth[month] === undefined) {
            shiftsByMonth[month] = [];
          };

          shiftsByMonth[month].push(result);
      }

      this.state.shifts.map((result) => {
        groupByMonth(result)
      });

      let months = Object.keys(shiftsByMonth).map((value, index) => {
        let shifts = shiftsByMonth[value].map((shift, i) => {
          return (
            <View key={i}>
              <TouchableHighlight>
                <View style={styles.shift}>
                  <View style={styles.shiftDate}>
                    <Text style={styles.shiftDayText}>{moment(shift.startDate).format('ddd')}</Text>
                    <Text style={styles.shiftDateText}>{moment(shift.startDate).format('D')}</Text>
                  </View>
                  <View style={styles.shiftInfo}>
                    <Text style={styles.shiftHeader}>
                      {moment(shift.startDate).format('LT')} to {moment(shift.endDate).format('LT')}
                    </Text>
                    <Text style={styles.shiftBreak}>
                      {shift.minsBreak} minutes break
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          );
        });

        return (
          <View key={index}>
            <Text style={styles.monthHeader}>{value}</Text>
            {shifts}
          </View>
        );
      });

      let shifts = this.state.shifts.map((shift, i) => {
        return (
          <View key={i}>
            <TouchableHighlight>
              <View style={styles.shift}>
                <View style={styles.shiftDate}>
                  <Text style={styles.shiftDayText}>{moment(shift.startDate).format('ddd')}</Text>
                  <Text style={styles.shiftDateText}>{moment(shift.startDate).format('D')}</Text>
                </View>
                <View style={styles.shiftInfo}>
                  <Text style={styles.shiftHeader}>
                    {moment(shift.startDate).format('LT')} to {moment(shift.endDate).format('LT')}
                  </Text>
                  <Text style={styles.shiftBreak}>
                    {shift.minsBreak} minutes break
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        );
      });

      return (
        <ScrollView style={styles.shiftsContainer}>
          {months}
        </ScrollView>
      );
    }
  }
});

module.exports = Shifts;
