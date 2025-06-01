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
    portraitInput: {
    width: '200%',
    height: 60,
    marginVertical: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginLeft: '50%',
    color: '#333',
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
  portraitButton: {
    width: '200%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    marginLeft: '50%',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
 
  linkText: {
    fontSize: 16,
    color: '#333',
    textDecorationLine: 'none',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '120%',
    marginBottom: 20,
    gap: 50,
  },

  landscapeTitle: {
    marginTop: '-17%',
    textAlign: 'center',
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },
  portraitTitle: {
    marginTop: '50%',
    textAlign: 'center',
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
  },
});

export default authStyles;