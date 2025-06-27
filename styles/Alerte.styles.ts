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
    padding: 30,
    
  },
  landscapeTitle: {
    textAlign: 'center',
    color: '#333',
    fontSize: 40,
    fontWeight: 'bold',
  },
  
  formContainer: {
   width: '100%',
    maxWidth: 1000,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  text: {
    color: '#333',
    fontSize: 24,
  },

});

export default authStyles;