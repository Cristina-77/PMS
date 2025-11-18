# 🩺 Real-Time Patient Monitoring System with Secure Blockchain Integration

### 🔷 Descriere generală a proiectului
Proiectul dezvoltă o aplicație mobilă pentru Android care ajută la monitorizarea în timp real a parametrilor fiziologici ai pacienților , folosind stocare în baza de date Firebase , securizare folosind Blockchain și alerte automate. Datele vitale ale pacienților sunt extrase de pe dispozitive fizice cum ar fi ceasuri sau telefoane , iar la creșteri sau scăderi bruște medicul aferent primește o alertă. 

### ⚙️ Funcționalități principale 
* Extragerea parametrilor vitali ai pacienților (puls) de pe dispozitive fizice
* Securizarea informațiilor sensibile folosind Blockchain
* Crearea conturilor pentru personalul medical (asistente, medici, recepție)
* Sistem de alerte automate pe tableta medicului și a asistentei
* Adăugarea  pacienților 

### 👥 Membrii echipei 
Proiectul a fost realizat de studenții din anul 2 : **Corb Alexia-Gabriela** , **Ciuches Cristina-Ioana**, **Ivascu Bogdan-Mihai** 

### 🛠️ Tehnologii folosite 
+ React Native - folosit pentru dezvoltarea aplicației pentru tabletă , pentru vizualizarea alertelor și adăugarea pacienților
+ Firebase -  Autentificare, stocarea datelor despre pacienți , recuperarea parolelor , alerte , 2FA
+ Blockchain - audit și trasabilitatea datelor despre pacienți
+ Swarteatch - colectarea datelor vitale

### 📲 Testarea hardware 
+ Tabletă: Lenovo Tab M11 (Android 13)
+ Smartwatch (cu senzori integrați de puls)

### 🚀 Rularea aplicației local 
1. **Clonarea proiectului local**
```bash
git clone https://github.com/Cristina-77/PMS.git
cd proiectul-tau
```
2. **Instalarea dependențelor**
```bash
npm install
```
3. **Pornirea serverului pentru Blockchain**
```bash
cd blockchain
npx hardhat node --hostname 0.0.0.0
cd blockchain
npx hardhat run scripts/deploy.js --network localhost
```
5. **Rulează aplicația pe tabletă/telefon conectat prin cablu usb**
```bash
npx react-native run-android
```
