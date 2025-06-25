
import database, { getDatabase , ref, push, set} from '@react-native-firebase/database';
import { data } from 'react-router-dom';
import auth from '@react-native-firebase/auth';
import { AccessibilityInfo } from 'react-native';

export const adaugareUser  = async (id, nume, prenume, adresaEmail,rol) => {
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

export const verificareExistaPacient = async(cnp) => {
    try{
            const date = await database()
            .ref('/pacienti')
            .orderByChild('cnp')    
            .equalTo(cnp)
            .once('value');
        return date.exists();
    }
    catch (error) {
        console.error('Eroare la verificarea existentei pacientului:', error);
        return false;
    }

};


export const adaugarePacient = async (nume, prenume, email, anNastere, cnp, doctorId, nrTel,sex) => {
    try {
        const bazaDate = getDatabase();
        const referintaPacient= ref(bazaDate, '/pacienti/');
        const referintaNoua = push(referintaPacient);
        const idPacient = referintaNoua.key; 
        console.log('ID-ul pacientului:', idPacient);
        await set(referintaNoua,{
                nume: nume,
                prenume: prenume,
                email: email,
                anNastere: anNastere,
                cnp: cnp,
                doctor: doctorId,
                nrTel: nrTel,
                sex: sex
            });
        return true;
    }
    catch (error) {
        console.error('Eroare la adaugarea pacientului:', error);
        return false;
    }
};

export const extragereIdMedic = async (adresaEmail) => {
    try {
        const date = await database()
            .ref('/users/')
            .orderByChild('adresaEmail')
            .equalTo(adresaEmail)
            .once('value');
        if( date.exists()){
            const medici = date.val();
            const idMedic = Object.keys(medici)[0]; 
            return idMedic;
        }
        else {
            console.log('Nu exista medic cu aceasta adresa de email.');
            return null;
        }
    }
    catch(error) {
        console.error('Eroare la extragerea ID-ului medicului:', error);
        return null;
    }
};
