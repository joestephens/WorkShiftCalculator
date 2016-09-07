import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var AddShiftIOS = require('./pages/addshift.ios');

var WorkShiftCalculator = React.createClass({
  render: function () {
    return (
      <Navigator
        ref="navigator"
        initialRoute={{title: 'Shifts', component: Shifts}}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator })
          }
        }} />
    );
  }
});

var Shifts = React.createClass({
  onActionSelected: function (position) {
    if (position === 0) {
      this.props.navigator.push({
        name: 'Add Shift',
        component: AddShift
      });
    }
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid style={styles.toolbar}
                        title="Shifts"
                        navIconName="bars"
                        iconColor="#A20025"
                        actions={[{
                          title: "Add Shift",
                          iconName: "plus",
                          show: "always",
                          showWithText: false
                        }]}
                        onActionSelected={this.onActionSelected}
                        onIconClicked={this.props.navigator.pop}
                        titleColor={'#A20025'} />
        <Text>Shifts page</Text>
      </View>
    )
  }
});

var Payslips = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid style={styles.toolbar}
                        title="Payslips"
                        navIconName="bars"
                        iconColor="#A20025"
                        actions={[{
                          title: "Create Payslip",
                          iconName: "plus",
                          show: "always",
                          showWithText: false
                        }]}
                        onIconClicked={this.props.navigator.pop}
                        titleColor={'#A20025'} />
        <Text>Shifts page</Text>
      </View>
    );
  }
});

var AddShift = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Icon.ToolbarAndroid style={styles.toolbar}
                        title="Add Shift"
                        navIconName="arrow-left"
                        iconColor="#A20025"
                        onIconClicked={this.props.navigator.pop}
                        titleColor={'#A20025'} />
        <AddShiftWrapper />
      </View>
    );
  }
});

var styles = {
  container: {
    flex: 1,
  },
  jumbotron: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#FFF',
    height: 56
  }
}

AppRegistry.registerComponent('WorkShiftCalculator', () => WorkShiftCalculator);
