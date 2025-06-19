import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback,ScrollView,SafeAreaView  } from 'react-native';
import authStyles from '../styles/Main.styles';
import {Alert} from 'react-native';
import { doc, setDoc } from '@react-native-firebase/firestore';
import { set } from '@react-native-firebase/database';
import { Picker } from '@react-native-picker/picker';
import { keccak256, toUtf8Bytes } from 'ethers';
import { salveazaHashInBlockchain } from '../blockchain';
import { verificaHashPacient } from '../blockchain';
const genereazaHashPacient = (pacient) => {
  const concatenat = `${pacient.nume}${pacient.prenume}${pacient.cnp}`;
  return keccak256(toUtf8Bytes(concatenat));
};

const Main = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');  
  const [email, setEmail] = useState('');
  const [varsta, setVarsta] = useState('');   
  const [cnp,setCnp] = useState('');
  const [doctor, setDoctor] = useState('');
  const [nrtel, setNrTel]= useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleRegister = async () => {
  const pacient = {
    nume: lastName,
    prenume: firstName,
    email,
    varsta: parseInt(varsta),
    doctor,
    cnp,
    telefon: nrtel
  };

  const hash = genereazaHashPacient(pacient);
  const exista = await verificaHashPacient(hash);

  if (exista) {
    Alert.alert("Pacient deja existent!", "Datele acestui pacient sunt deja în blockchain.");
    return;
  }

  // Salvează în Firebase
  const ref = database().ref('/pacienti').push();
  await ref.set(pacient);
  console.log("Pacient salvat în Firebase cu ID:", ref.key);

  // Salvează în blockchain
  await salveazaHashInBlockchain(hash);

  Alert.alert("Succes", "Pacient înregistrat!");
};

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
        <SafeAreaView style={authStyles.flex}>
      <ScrollView
        contentContainerStyle={[authStyles.container, {flexGrow: 1, paddingTop:80}]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={authStyles.formContainer}>
          
            <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Introducere Pacienți</Text>
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
                placeholder="Vârsta"
                placeholderTextColor={'#888'}
                value={varsta}
                onChangeText={setVarsta}
                secureTextEntry={true}
                required
              />
              
              <TextInput
                style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
                placeholder="Doctor"
                placeholderTextColor={'#888'}
                value={doctor}
                onChangeText={setDoctor}
                required
              />
              <TextInput
                style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
                placeholder="CNP"
                placeholderTextColor={'#888'}
                value={cnp}
                onChangeText={setCnp}
                required
              />
              <TextInput
                style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
                placeholder="Numar de telefon"
                placeholderTextColor={'#888'}
                value={nrtel}
                onChangeText={setNrTel}
                required
              />

              <Picker style={authStyles.picker}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                  <Picker.Item label="Sex" value="" />
                  <Picker.Item label="Feminin" value="Feminin" />
                  <Picker.Item label="Masculin" value="Masculin" />
              </Picker>

            
            <TouchableOpacity style={isPortrait ? authStyles.portraitButton : authStyles.landscapeButton} onPress={handleRegister}>
              <Text style={authStyles.buttonText}>Introducere Pacient</Text>
            </TouchableOpacity>

            
         
        </View>
      </ScrollView>
       </SafeAreaView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
)
}

export default Main;