import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  landscapeContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
    height: '70%',
    marginLeft: 'auto',
    marginRight: '25%',
    marginTop: '20%',
    padding: '2%',
  },

  portratitContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    width: '50%',
    height: 60,
    marginVertical: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginLeft: '25%',
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
    width: '50%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    marginLeft: '25%',
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

  portraitTitle: {
    marginTop: '50%',
    textAlign: 'center',
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default authStyles;