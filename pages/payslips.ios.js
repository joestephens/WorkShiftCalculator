import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
const styles = require('../styles/');

class Payslips extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.welcome}>
            No payslips created yet
          </Text>
          <Text style={styles.instructions}>
            To get started, click the Create button
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = Payslips;
