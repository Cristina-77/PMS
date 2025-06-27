import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, ScrollView, SafeAreaView, Alert } from 'react-native';
import authStyles from '../styles/Alerte.styles';
import { FlatList } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { getDatabase, ref, get } from 'firebase/database';
import database from '@react-native-firebase/database';

const Alerte = () => {
  const route = useRoute();
  const [patients, setPatients] = useState(route.params?.patients || []); // Setează pacienții din params

  // Functia pentru preluarea ultimului puls
  const getLastPulse = async (cnp) => {
    const db = getDatabase();
    const patientRef = ref(db, `pacienti/${cnp}/puls`); // Accesăm nodul de puls al pacientului

    const snapshot = await get(patientRef); // Preluăm toate pulsurile

    if (snapshot.exists()) {
      const pulses = snapshot.val(); // Obținem datele pulsurilor
      const pulseIds = Object.keys(pulses); // Extragem cheile (id-urile) pulsurilor

      // Verificăm dacă există pulsuri
      if (pulseIds.length === 0) {
        console.log(`Nu există pulsuri pentru pacientul cu CNP: ${cnp}`);
        return null;
      }

      // Sortăm pulsurile în funcție de timestamp (descrescător)
      pulseIds.sort((a, b) => pulses[b].timestamp - pulses[a].timestamp);

      // Preluăm pulsul cu cel mai mare timestamp
      const lastPulseId = pulseIds[0]; // Acesta va fi pulsul cel mai recent
      const lastPulse = pulses[lastPulseId]; // Obținem pulsul

      return lastPulse; // Returnăm pulsul cu valoare și timestamp-ul
    } else {
      console.log(`Nu există pulsurile pentru pacientul cu CNP: ${cnp}`);
      return null;
    }
  };

  // useEffect pentru a prelua pacienții și pulsul acestora
  useEffect(() => {
    if (route.params?.patients) {
      const fetchLastPulseForPatients = async () => {
        const updatedPatients = await Promise.all(
          route.params.patients.map(async (patient) => {
            const lastPulse = await getLastPulse(patient.cnp); // Preluăm pulsul
            Alert.alert(`Pacient: ${patient.nume}`, `Puls: ${lastPulse ? lastPulse.valoare : 'N/A'}`);
            return {
              ...patient,
              lastPulse: lastPulse ? lastPulse.valoare : 'N/A', // Actualizăm valoarea pulsului
            };
          })
        );
        console.log('Pacienți actualizați cu puls:', updatedPatients);
        setPatients(updatedPatients); // Actualizăm starea pacienților cu pulsul lor
      };

      fetchLastPulseForPatients();
    }
  }, [route.params]);

  // Verificăm dacă nu sunt pacienți
  if (patients.length === 0) {
    return (
      <ImageBackground source={require('../icons/login.jpg')} style={authStyles.background} resizeMode="cover">
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={authStyles.flex}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={authStyles.flex}>
              <ScrollView contentContainerStyle={[authStyles.container, { flexGrow: 1, paddingTop: 80 }]} keyboardShouldPersistTaps="handled">
                <View style={authStyles.formContainer}>
                  <Text style={authStyles.landscapeTitle}>Nu există pacienți atribuiți acestui medic</Text>
                </View>
              </ScrollView>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground source={require('../icons/login.jpg')} style={authStyles.background} resizeMode="cover">
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={authStyles.flex}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={authStyles.flex}>
              <ScrollView contentContainerStyle={[authStyles.container, { flexGrow: 1, paddingTop: 80 }]} keyboardShouldPersistTaps="handled">
                <Text style={authStyles.landscapeTitle}>Pacienți atribuiți:</Text>
                <View style={authStyles.formContainer}>
                  <FlatList
                    data={patients}
                    renderItem={({ item }) => (
                      <View>
                        <Text style={authStyles.text}>Nume: {item.nume}</Text>
                        <Text style={authStyles.text}>Prenume: {item.prenume}</Text>
                        <Text style={authStyles.text}>Puls: {item.lastPulse !== 'N/A' ? item.lastPulse : 'Puls indisponibil'}</Text>
                      </View>
                    )}
                    keyExtractor={(item) => item.cnp}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                  />
                </View>
              </ScrollView>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
};

export default Alerte;
