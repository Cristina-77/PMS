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
  formContainer: {
   width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
  },
});

export default authStyles;