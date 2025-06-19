import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback,ScrollView  } from 'react-native';
import authStyles from '../styles/Create.styles';
import { adaugareUser, verificareExistaUser } from '../src/services/firebase';
import {Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CreateAccount = ({ navigation }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState("");

  const handleRegister = async () => {
    if (!lastName || !firstName || !email || !password) {
      Alert.alert("Toate câmpurile sunt obligatorii!");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Parolele nu se potrivesc!");
      return;
    }
    if (await verificareExistaUser(email)){
        Alert.alert("Exista deja un cont cu acest e-mail")
        return;
    }
    adaugareUser(2, firstName, lastName, email, password) ;
    Alert.alert("Cont creat cu succes!");
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={authStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={authStyles.formContainer}>
          <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Creează Un Cont</Text>
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
              secureTextEntry={true}
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

             <Picker style={authStyles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Selectează rolul" value="" />
                <Picker.Item label="Medic" value="Medic" />
                <Picker.Item label="Asistenta" value="Asistenta" />
                <Picker.Item label="Receptie" value="Receptie" />
            </Picker>

            <TouchableOpacity style={isPortrait ? authStyles.portraitButton : authStyles.landscapeButton} onPress={handleRegister}>
              <Text style={authStyles.buttonText}>Creare cont</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default CreateAccount;

