import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import authStyles from '../styles/Login.styles';

const auth = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempted with:', email, password);
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
        style={authStyles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView
      contentContainerStyle={authStyles.container}
      keyboardShouldPersistTaps="handled"
    >
        <View style={authStyles.formContainer}>
          <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Creează Un Cont</Text>
          
          
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
             </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};



export default auth;