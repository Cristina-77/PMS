import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions } from 'react-native';
import authStyles from '../styles/Create.styles';

const CreateAccount = ({ navigation }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Registration attempted with:', { lastName, firstName, email, password });
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
        <View style={authStyles.container}>
          <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Creează Un Cont</Text>
          
          <View style={authStyles.formContainer}>
            <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="Nume"
              placeholderTextColor={'#888'}
              value={lastName}
              onChangeText={setLastName}
              required
            />
            
            <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="Prenume"
              placeholderTextColor={'#888'}
              value={firstName}
              onChangeText={setFirstName}
              required
            />
            
            <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="Email"
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
            
            <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="Repetare Parolă"
              placeholderTextColor={'#888'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              required
            />
            
            <TouchableOpacity style={isPortrait ? authStyles.portraitButton : authStyles.landscapeButton} onPress={handleRegister}>
              <Text style={authStyles.buttonText}>Creare cont</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default CreateAccount;