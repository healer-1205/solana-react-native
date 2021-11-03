import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import TermsAndPrivacy from './src/screens/TermsAndPrivacy';
import TabNavigation from './src/navigation/TabNavigation';
import CreateWallet from './src/screens/CreateWallet';
import ConfirmPhrase from './src/screens/ConfirmPhrase';
import store from './src/store/index';
const Stack = createStackNavigator();

import "./global";
import CounterAction from './src/store/actions/index'
const App = props => {

  const hideHeader = { headerShown: false }
  return <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TermsAndPrivacy" component={TermsAndPrivacy} options={hideHeader} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={hideHeader} />
        <Stack.Screen name="CreateWallet" component={CreateWallet} options={hideHeader} />
        <Stack.Screen name="ConfirmPhrase" component={ConfirmPhrase} options={hideHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
}

const styles = StyleSheet.create({

})

export default App;