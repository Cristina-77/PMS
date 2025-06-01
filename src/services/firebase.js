
import database from '@react-native-firebase/database';
import { data } from 'react-router-dom';
<<<<<<< HEAD
import auth from '@react-native-firebase/auth';
import { AccessibilityInfo } from 'react-native';

export const adaugareUser  = async (id, nume, prenume, adresaEmail, rol) => {
=======

export const adaugareUser  = async (id, nume, prenume, adresaEmail, parola) => {
>>>>>>> dea2f00be150a53d877212064ccb31ada9469cd8
    try{
        await database()
            .ref('/users/' + id)
            .set({
                nume: nume,
                adresaEmail: adresaEmail,
                prenume: prenume,
<<<<<<< HEAD
                rol: rol
            }); 
        console.log('User adaugat cu succes:', id);
        
        
=======
                parola: parola
            });
            console.log('User adaugat cu succes:', id);
>>>>>>> dea2f00be150a53d877212064ccb31ada9469cd8
    }
    catch (error) {
        console.error('Eroare la adaugarea userului:', error);
    }
};

<<<<<<< HEAD

=======
>>>>>>> dea2f00be150a53d877212064ccb31ada9469cd8
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

<<<<<<< HEAD
=======
export const verificareLogare = async(adresaEmail, parola) => {
    try {
        const date= await database()
            .ref('/users')
            .orderByChild('adresaEmail')
            .equalTo(adresaEmail)
            .once('value');
        if (date.exists()) {                    
            const userData = date.val();
            const userId = Object.keys(userData)[0];
            const user = userData[userId];
            console.log(user.parola);
            console.log(parola);
            if (user.parola === parola) {
                console.log('Logare reusita:', userId);
                return { id: userId, ...user };
            } 
            else {
                console.log('Parola incorecta');
                return null;
            }
        }
        else {
            console.log('Nu exista user cu acest email');
            return null;
        }
    }
    catch (error){
        console.error('Eroare la verificarea logarii:', error);
        return null;    
    }
};
>>>>>>> dea2f00be150a53d877212064ccb31ada9469cd8

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