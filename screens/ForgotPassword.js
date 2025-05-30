
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.flex}
        >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView
      contentContainerStyle={authStyles.container}
      keyboardShouldPersistTaps="handled"
    >
        <View style={authStyles.formContainer}>
          
     
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
      </ScrollView>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    </ImageBackground>
  );
};


export default ForgotPassword;