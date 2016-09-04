import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = require('./styles/');
var Shifts = require('./pages/shifts.ios');
var Payslips = require('./pages/payslips.ios');
var Settings = require('./pages/settings.ios');
var AddShift = require('./pages/addshift.ios');

class WorkShiftCalculator extends Component {
  render() {
    return <TabBar />
  }
}

class TabBar extends Component {
  state = {
    selectedTab: 'shifts'
  };

  render() {
    return (
      <TabBarIOS tintColor='#A20025'>
        <Icon.TabBarItemIOS
          title="Shifts"
          iconName="calendar-o"
          selected={this.state.selectedTab === 'shifts'}
          onPress={() => {
            this.setState({
              selectedTab: 'shifts',
            });
          }}>
          <NavigatorIOS
            ref="nav"
            style={styles.container}
            tintColor='#A20025'
            initialRoute={{
              title: 'Shifts',
              rightButtonTitle: 'Add',
              onRightButtonPress: () => {
                this.refs.nav.navigator.push({
                  title: "Add Shift",
                  component: AddShift,
                  rightButtonTitle: 'Cancel',
                  onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
                });
              },
              component: Shifts,
            }}
          />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Payslips"
          iconName="money"
          selected={this.state.selectedTab === 'payslips'}
          onPress={() => {
            this.setState({
              selectedTab: 'payslips',
            });
          }}>
          <NavigatorIOS
            style={styles.container}
            tintColor='#A20025'
            initialRoute={{
              title: 'Payslips',
              rightButtonTitle: 'Create',
              component: Payslips,
            }}
          />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Settings"
          iconName="gears"
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          <NavigatorIOS
            style={styles.container}
            tintColor='#A20025'
            initialRoute={{
              title: 'Settings',
              component: Settings,
            }}
          />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('WorkShiftCalculator', () => WorkShiftCalculator);
