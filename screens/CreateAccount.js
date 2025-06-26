import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback,ScrollView  } from 'react-native';
import authStyles from '../styles/Create.styles';
import auth from '@react-native-firebase/auth';
import { adaugareUser, verificareExistaUser } from '../src/services/firebase';
import {Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateAccount = ({ navigation }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState("");
  const [securizatParola, setSecurizatParola] = useState(true);
  const [securizatRepetare, setSecurizatRepetare] = useState(true);
  const handleRegister = async () => {
    if (!lastName || !firstName || !email || !password || !confirmPassword || !selectedValue) {

      Alert.alert("Toate câmpurile sunt obligatorii!");
      return;
    }
    if (password.length < 6){
      Alert.alert("Parola trebuie să aibă cel puțin 6 caractere!");
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert("Adresa de e-mail nu este validă!");
      return;
    }
    if (lastName.length < 2 || firstName.length < 2) {
      Alert.alert("Numele și prenumele trebuie să aibă cel puțin 2 caractere fiecare!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Parolele nu se potrivesc!");
      return;
    }
     if (await verificareExistaUser(email)!== false) {
        Alert.alert("Exista deja un cont cu acest e-mail")
        return;
    }
    try{
        const credentiale= await auth().createUserWithEmailAndPassword(email, password);            
        const user = credentiale.user;
        const uid = user.uid;
        await user.sendEmailVerification();
        Alert.alert("Verifică-ți e-mailul pentru a activa contul.");
        await adaugareUser(uid, lastName, firstName, email, selectedValue);
        Alert.alert("Cont creat cu succes!");
        navigation.navigate('Login');
    }
    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert("Adresa de e-mail este deja folosită.");
      }
      else if (error.code === 'auth/invalid-email') {
        console.error('Eroare la crearea contului:', error);
      }
    }

    if (await verificareExistaUser(email)){
        Alert.alert("Exista deja un cont cu acest e-mail")
        return;
    }
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
            <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
              <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="Parolă"
              placeholderTextColor={'#888'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={securizatParola}
              required
              />
              <TouchableOpacity 
                  onPress={() => setSecurizatParola(!securizatParola)}
                  style={{position: 'absolute', right: -55, transform: [{translateY: 0}],}}
              >
                  <Icon 
                    name={securizatParola ? "eye-off" : "eye"}
                    size={24}       
                    color="#888"
                  />
              </TouchableOpacity>
        
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                <TextInput
                  style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
                  placeholder="Repetare Parolă"
                  placeholderTextColor={'#888'}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={securizatRepetare}
                  required
                />
                <TouchableOpacity
                  onPress={() => setSecurizatRepetare(!securizatRepetare)}
                  style={{position: 'absolute', right: -55, transform: [{translateY: 0}],}} 
                >
                  <Icon   
                    name={securizatRepetare ? "eye-off" : "eye"}
                    size={24}       
                    color="#888"
                  />
                </TouchableOpacity>
              
            </View>
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
