import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
const styles = require('../styles/');

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.welcome}>
            Hello World!
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = Settings;
