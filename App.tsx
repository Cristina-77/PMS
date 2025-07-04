import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import ForgotPassword from './screens/ForgotPassword'; 
import Main from './screens/Main';
import Alerte from './screens/Alerte'; 

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
          component={Main}
          options={{ 
            headerShown: true,
            title: 'Adaugare Pacienti',
            headerTitleStyle: styles.headerTitle,
            headerTintColor: '#333'
          }}
          />
         <Stack.Screen
          name="Alerte" 
          component={Alerte} 
          options={{ 
            headerShown: true,
            title: 'Alerte',
            headerTitleStyle: styles.headerTitle,
            headerTintColor: '#333'
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





