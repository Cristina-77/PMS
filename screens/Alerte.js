import React, { useState } from 'react';
import { View, Text, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback,ScrollView,SafeAreaView  } from 'react-native';
import authStyles from '../styles/Alerte.styles';
const Alerte = ({ navigation }) => {
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
            <Text style={authStyles.landscapeTitle}>Alerte Pacienți</Text>
        </View>
      </ScrollView>
       </SafeAreaView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
)
}

export default Alerte;