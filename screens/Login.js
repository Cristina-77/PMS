import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native';
import authStyles from '../styles/Login.styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securizatParola, setSecurizatParola] = useState(true);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Toate câmpurile trebuie completate");
      return;
    }

    try {
      const credential = await auth().signInWithEmailAndPassword(email, password);
      const user = credential.user;

      

      const snapshot = await database().ref(`/users/${user.uid}/rol`).once('value');
      const rol = snapshot.val();

      if (rol === 'Receptie') navigation.navigate('Main');
      else if (rol === 'Medic' || rol === 'Asistenta') navigation.navigate('Alerte');
      else Alert.alert('Rol necunoscut', 'Contactează administratorul.');
    } catch (error) {
      Alert.alert("Eraore la autentificare", "Email sau parolă incorectă");
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
          <ScrollView
            contentContainerStyle={authStyles.container}
            keyboardShouldPersistTaps="handled"
          >
            <View style={authStyles.formContainer}>
              <Text style={authStyles.landscapeTitle}>Bine ați (Re)Venit!</Text>
              
              <TextInput
                style={authStyles.landscapeInput}
                placeholder="E-mail"
                placeholderTextColor={'#888'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              
              <View style={{ flexDirection: 'row', position: 'relative', alignItems: 'center' }}>
                <TextInput
                  style={authStyles.landscapeInput}
                  placeholder="Parolă"
                  placeholderTextColor={'#888'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={securizatParola}
                />
                <TouchableOpacity
                  onPress={() => setSecurizatParola(!securizatParola)}
                  style={{ position: 'absolute', right: -55, transform: [{ translateY: 0 }] }}
                >
                  <Icon 
                    name={securizatParola ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#888" 
                  />
                </TouchableOpacity>
              </View>

              <View style={authStyles.linksContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={authStyles.linkText}>Ai uitat parola?</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                  <Text style={authStyles.linkText}>Creează un cont</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={authStyles.landscapeButton} onPress={handleLogin}>
                <Text style={authStyles.buttonText}>Intră în cont</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;
