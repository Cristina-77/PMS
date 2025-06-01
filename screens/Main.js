import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, useWindowDimensions, Keyboard, TouchableWithoutFeedback,ScrollView  } from 'react-native';
import authStyles from '../styles/Main.styles';
import {Alert} from 'react-native';

const Main = ({ navigation }) => {
return (
    <ImageBackground 
      source={require('../icons/login.jpg')} 
      style={authStyles.background}
      resizeMode="cover"
    >
    </ImageBackground>
)
}

export default Main;