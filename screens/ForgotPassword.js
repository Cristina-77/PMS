
import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, ImageBackground, useWindowDimensions } from 'react-native';
=======
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
>>>>>>> 6e479df873620439619a8cc142071198ca3c3fed
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
<<<<<<< HEAD
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.flex}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
=======
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.flex}
        >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
>>>>>>> 6e479df873620439619a8cc142071198ca3c3fed
    <ScrollView
      contentContainerStyle={authStyles.container}
      keyboardShouldPersistTaps="handled"
    >
<<<<<<< HEAD
        <View style={authStyles.formContainer}></View>
        <View style={isPortrait ? authStyles.portraitContainer : authStyles.landscapeContainer}>
=======
        <View style={authStyles.formContainer}>
          
     
>>>>>>> 6e479df873620439619a8cc142071198ca3c3fed
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
<<<<<<< HEAD
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
=======
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
>>>>>>> 6e479df873620439619a8cc142071198ca3c3fed
    </ImageBackground>
  );
};


export default ForgotPassword;