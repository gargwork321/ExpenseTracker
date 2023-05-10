/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AddExpenseScreen from './src/screens/AddExpense';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionDetailScreen from './src/screens/TransactionDetail';
import {entryContext} from './src/realm';
import Summary from './src/screens/Summary';
import Screens from './src/constants/screens';
const {RealmProvider} = entryContext;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.ADD_EXPENSE}
          component={AddExpenseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.TRANSACTION_DETAIL}
          component={TransactionDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.SUMMARY}
          component={Summary}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppWrapper = () => {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
};

export default AppWrapper;
