import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  flex: {
    flex: 1,
  },
   container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
   width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
  },
  landscapeInput: {
    width: '120%',
    height: 60,
    marginVertical: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
  },
  landscapeButton: {
    width: '120%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    color: '#333',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
 
 
  landscapeTitle: {
    marginTop: '-17%',
    textAlign: 'center',
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },

  picker:{
    width: '120%',
    height: 60,
    marginVertical: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    color: '#000',
  },
});

export default authStyles;