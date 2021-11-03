import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/HomeTab';
import SettingsTab from '../screens/SettingsTab';
import WalletTab from '../screens/WalletTab';
import ExchangeTab from '../screens/ExchangeTab';

const Tab = createBottomTabNavigator();

const HomeActive = require('../assets/images/HomeActive.png')
const HomeInActive = require('../assets/images/HomeInActive.png')
const WalletActiveIcon = require('../assets/images/WalletActive.png')
const WalletInActiveIcon = require('../assets/images/WalletInActive.png')
const ExchangeActiveIcon = require('../assets/images/ExchangeActive.png')
const ExchangeInActiveIcon = require('../assets/images/ExchangeInActive.png')
const SettingsActiveIcon = require('../assets/images/SettingsActive.png')
const SettingsInActiveIcon = require('../assets/images/SettingsInActive.png')


const hideHeader = { headerShown: false }
const TabNavigation = props => {
  return <Tab.Navigator
    tabBarOptions={{ showLabel: false }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === 'Home') {
          return focused ? <Image source={HomeActive} resizeMode='contain' /> : <Image source={HomeInActive} resizeMode='contain' />
        } else if (route.name === 'Wallet') {
          return focused ? <Image source={WalletActiveIcon} resizeMode='contain' /> : <Image source={WalletInActiveIcon} resizeMode='contain' />
        } else if (route.name === 'Exchange') {
          return focused ? <Image source={ExchangeActiveIcon} resizeMode='contain' /> : <Image source={ExchangeInActiveIcon} resizeMode='contain' />
        } else if (route.name === 'Settings') {
          return focused ? <Image source={SettingsActiveIcon} resizeMode='contain' /> : <Image source={SettingsInActiveIcon} resizeMode='contain' />
        }
      },
    })}>
    <Tab.Screen name="Home" component={HomeTab} options={hideHeader} />
    <Tab.Screen name="Exchange" component={ExchangeTab} />
    <Tab.Screen name="Wallet" component={WalletTab} />
    <Tab.Screen name="Settings" component={SettingsTab} />
  </Tab.Navigator>
}

const styles = StyleSheet.create({

})

export default TabNavigation