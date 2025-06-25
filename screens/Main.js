import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback,ScrollView,SafeAreaView, Touchable  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import authStyles from '../styles/Main.styles';
import {Alert} from 'react-native';
import { doc, setDoc } from '@react-native-firebase/firestore';
import { set } from '@react-native-firebase/database';
import { Picker } from '@react-native-picker/picker';
import { keccak256, toUtf8Bytes } from 'ethers';
import { salveazaHashInBlockchain } from '../blockchain';
import { verificaHashPacient } from '../blockchain';
import { adaugarePacient, verificareExistaPacient, extragereIdMedic } from '../src/services/firebase';
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
  const [anNastere, setAnNastere] = useState('');   
  const [cnp,setCnp] = useState('');
  const [doctor, setDoctor] = useState('');
  const [nrtel, setNrTel]= useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [securizat, setSecurizat] = useState(true);  

  const anCurent = new Date().getFullYear();
  const handleRegister = async () => {
  if (!lastName || !firstName || !email || !anNastere || !cnp || !doctor || !nrtel || !selectedValue) {
    Alert.alert("Toate câmpurile sunt obligatorii!"); 
    return;
  }
  if(! /^\d{13}$/.test(cnp)){
      Alert.alert('CNP-ul trebuie să conțină exact 13 cifre.');
      return;
  }
  if(!/^[a-zA-Z]+$/.test(lastName) || !/^[a-zA-Z]+$/.test(firstName)){
      Alert.alert('Numele și prenumele trebuie să conțină doar litere.'); 
      return;
  }
  if (!/^\d+$/.test(anNastere) || parseInt(anNastere) > anCurent ) {
      Alert.alert('Anul nașterii trebuie să conțină doar cifre și să fie mai mic sau egal cu anul curent .');
      return;
  }
  if (!/^\d{10}$/.test(nrtel)) {
      Alert.alert('Numărul de telefon trebuie să conțină exact 10 cifre.');
      return;
  }
  if (email.includes('@') === false || email.includes('.') === false) {
      Alert.alert('Adresa de email nu este validă. Te rugăm să introduci o adresă de email corectă.');
      return;
  }
  if (await verificareExistaPacient(cnp)) {
      Alert.alert('Pacientul cu acest CNP există deja. Te rugăm să verifici datele introduse.');
      return;
  }
  const doctorId = await extragereIdMedic(doctor);

  if (!doctorId) {
      Alert.alert('Eroare la obținerea ID-ului medicului. Te rugăm să încerci din nou.');
      return;
  }
  const pacient = {
    nume: lastName,
    prenume: firstName,
    email,
    anNastere: parseInt(anNastere),
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
  //const ref = database().ref('/pacienti').push();
  //await ref.set(pacient);
  //console.log("Pacient salvat în Firebase cu ID:", ref.key);
  await salveazaHashInBlockchain(hash);
  const adagareFirebase = await adaugarePacient(lastName, firstName, email, anNastere, cnp, doctorId, nrtel, selectedValue);
  if (adagareFirebase) {
    Alert.alert("Pacient adăugat cu succes!", "Datele pacientului au fost salvate în blockchain și în Firebase.");
    navigation.navigate('Login'); 
  } else {
    Alert.alert("Eroare la adăugarea pacientului!", "Te rugăm să încerci din nou.");
  }
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
                placeholder="An naștere"
                placeholderTextColor={'#888'}
                value={anNastere}
                onChangeText={setAnNastere}
                required
              />
              
              <TextInput
                style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
                placeholder="Email doctor"
                placeholderTextColor={'#888'}
                value={doctor}
                onChangeText={setDoctor}
                required
              />
              
              <View style={{flexDirection: 'row',alignItems: 'center' , position: 'relative'}}>
                    <TextInput
                      style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
                      placeholder="CNP"
                      placeholderTextColor={'#888'}
                      value={cnp}
                      onChangeText={setCnp}
                      secureTextEntry={securizat}
                      required
                    />
                    <TouchableOpacity 
                      onPress={() => setSecurizat(!securizat)}
                      style={{position: 'absolute', right: -55, transform: [{translateY: 0}],}}
                    >
                    <Icon 
                      name={securizat ? 'eye-off' : 'eye'}
                      size={24}
                      color={'#888'}
                    />
                    </TouchableOpacity>
              </View>

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