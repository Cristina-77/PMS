
import database from '@react-native-firebase/database';
import { data } from 'react-router-dom';
import auth from '@react-native-firebase/auth';
import { AccessibilityInfo } from 'react-native';

export const adaugareUser  = async (id, nume, prenume, adresaEmail, rol) => {
    try{
        await database()
            .ref('/users/' + id)
            .set({
                nume: nume,
                adresaEmail: adresaEmail,
                prenume: prenume,
                rol: rol
            }); 
        console.log('User adaugat cu succes:', id);
        
        
    }
    catch (error) {
        console.error('Eroare la adaugarea userului:', error);
    }
};


export const verificareExistaUser= async (adresaEmail) => {
    try{
        const date = await database()
            .ref('/users')
            .orderByChild('adresaEmail')
            .equalTo(adresaEmail)
            .once('value');
        return date.exists();
    }
    catch (error) {
        console.error('Eroare la verificarea existentei userului:', error);
        return false;
    } 
};


export const recuperareParola =async (adresaEmail) => {
    try{
        const date= await database()
        .ref('/users')
        .orderByChild('adresaEmail')
        .equalTo(adresaEmail)
        .once('value');
        return date.exists()
    }
    catch (error) {
        console.error('Eroare la recuperarea parolei:', error);
        return false;
    }
};