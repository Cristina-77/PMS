import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import ForgotPassword from './screens/ForgotPassword'; 
import Main from './screens/Main'; // Placeholder for Main screen
import Alerte from './screens/Alerte'; // Placeholder for Alerte screen

type RootStackParamList = {
  Login: undefined;
  Alerte: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ 
            headerShown: false,
            title: 'Login'
          }} 
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount} 
          options={{ 
            headerShown: true,
            title: 'Create Account',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: '#333'
          }} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
          options={{ 
            headerShown: true,
            title: 'Forgot Password',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: '#333'
          }} 
        />
        <Stack.Screen
          name="Main" 
          component={Main} // Placeholder for Main screen
          options={{ 
            headerShown: false,
            title: 'Main'
          }}
          />
         <Stack.Screen
          name="Alerte" 
          component={Alerte} // Placeholder for Main screen
          options={{ 
            headerShown: false,
            title: 'Alerte'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f9fa',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
