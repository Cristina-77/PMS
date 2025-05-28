
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import authStyles from '../styles/Forgot.styles';
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Password reset requested for:', email);
  };

  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <ImageBackground 
      source={require('../icons/login.jpg')} 
      style={authStyles.background}
    >
      <View style={isPortrait ? authStyles.portraitContainer : authStyles.landscapeContainer}>
        <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Resetare Parolă</Text>
        <TextInput
          style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
          placeholder="E-mail"
          placeholderTextColor={'#888'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity style={isPortrait ? authStyles.portraitButton : authStyles.landscapeButton} onPress={handleSubmit}>
          <Text style={authStyles.buttonText}>Trimite link de resetare</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default ForgotPassword;