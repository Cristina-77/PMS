import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback,ScrollView  } from 'react-native';
import authStyles from '../styles/Login.styles';
import { Alert } from 'react-native';
import { verificareLogare } from '../src/services/firebase';
import auth from '@react-native-firebase/auth'; 
import { verificareExistaUser } from '../src/services/firebase';
import { Picker } from '@react-native-picker/picker'; 
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securizatParola, setSecurizatParola] = useState(true);

  const handleLogin = async () => {
    if (!email || !password){
      Alert.alert("Toate campurile trebuie completate")
      return;
    }
    try{
       const credentialeUser= await auth().signInWithEmailAndPassword(email, password);
       if (credentialeUser){
         const uid = credentialeUser.user.uid;
          Alert.alert("Logare reusita!");
          const snapshot = await database().ref(`/users/${uid}/rol`).once('value');
          const rol = snapshot.val();
          if (rol === 'Receptie') {
            navigation.navigate('Main');
          }
          else if (rol === 'Medic' || rol === 'Asistenta') {
            navigation.navigate('Alerte')
          } 
          else {
            Alert.alert('Rol necunoscut. Contactează administratorul.');
          }

       }
       else{
          Alert.alert("Logare esuata! Verifica datele introduse.");
       }
    } catch(error){
      console.error("Eroare la logare:", error);
      Alert.alert("Eroare la logare", "Verifica datele introduse și încearcă din nou.");
    }
    if (await verificareLogare(email, password) === null){
      Alert.alert("E-mail sau parolă incorectă");
      return ;
    }
    else{
      Alert.alert("Logare reușită!");
      navigation.navigate('Main');}

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
          <Text style={isPortrait ? authStyles.portraitTitle : authStyles.landscapeTitle}>Bine ați (Re)Venit!</Text>
          
            <TextInput
              style={isPortrait ? authStyles.portraitInput : authStyles.landscapeInput}
              placeholder="E-mail"
              placeholderTextColor={'#888'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              required
            />
            <View style={{ flexDirection: 'row' ,position: 'relative' , alignItems: 'center'}}>
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
                    style={{position: 'absolute', right: -55, transform: [{translateY: 0 }],}} 
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
            
            <TouchableOpacity style={isPortrait ? authStyles.portraitButton : authStyles.landscapeButton} onPress={handleLogin}>
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