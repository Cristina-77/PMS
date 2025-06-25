
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, useWindowDimensions,KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback,ScrollView } from 'react-native';
import authStyles from '../styles/Forgot.styles';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert("Te rugăm să introduci adresa de e-mail.");
      return;
    }
auth()
  .sendPasswordResetEmail(email.trim())
  .then(() => {
    Alert.alert("A fost trimis un link de resetare a parolei");
    navigation.navigate('Login');
  })
  .catch(error => {
    if (error.code === 'auth/user-not-found') {
      Alert.alert("Nu există un cont cu acest e-mail.");
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert("Adresa de e-mail nu este validă.");
    } else {
      Alert.alert("Eroare necunoscută: " + error.message);
    }
  });
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