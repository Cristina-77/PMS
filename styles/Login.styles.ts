
import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
    height: '70%',
    marginLeft: 'auto',
    marginRight: '25%',
    marginTop: '15%',
    padding: '2%',
  },
  formContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -125 }, { translateY: -150 }],
    width: '100%',
    alignItems: 'center',
    
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