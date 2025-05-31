import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions } from 'react-native';
=======
import {View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
>>>>>>> 6e479df873620439619a8cc142071198ca3c3fed
import authStyles from '../styles/Login.styles';
import { Alert } from 'react-native';
import { verificareLogare } from '../src/services/firebase';

const auth = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password){
      Alert.alert("Toate campurile trebuie completate")
      return;
    }
    if (await verificareLogare(email, password) === null){
      Alert.alert("E-mail sau parolă incorectă");
      return ;
    }
    else{
      Alert.alert("Logare reușită!");    }

  };

  const { width, height } = useWindowDimensions();
    const isPortrait = height >= width;

  return (
    <ImageBackground 
      source={require('../icons/login.jpg')} 
      style={authStyles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.flex}
      >
<<<<<<< HEAD
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={authStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={authStyles.formContainer}>
          <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Creează Un Cont</Text>
=======
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView
      contentContainerStyle={authStyles.container}
      keyboardShouldPersistTaps="handled"
    >
        <View style={authStyles.formContainer}>
          <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Creează Un Cont</Text>
          
>>>>>>> 6e479df873620439619a8cc142071198ca3c3fed
          
            <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="E-mail"
              placeholderTextColor={'#888'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              required
            />
            
            <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="Parolă"
              placeholderTextColor={'#888'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              required
            />
            
            <View style={authStyles.linksContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={authStyles.linkText}>Ai uitat parola?</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={authStyles.linkText}>Creează un cont</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={isPortrait ? authStyles.portraitButton : authStyles.landscapeButton} onPress={handleLogin}>
              <Text style={authStyles.buttonText}>Intră în cont</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
<<<<<<< HEAD
      </TouchableWithoutFeedback>
=======
             </TouchableWithoutFeedback>
>>>>>>> 6e479df873620439619a8cc142071198ca3c3fed
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};



export default auth;