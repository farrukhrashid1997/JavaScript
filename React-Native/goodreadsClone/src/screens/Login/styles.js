import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  textInput: {
    width: Dimensions.get('window').width * 0.7,
    borderBottomWidth: 1,
    marginTop: 35,
    paddingBottom: 0,
    borderColor: '#757575',
  },

  passwordView: {
    width: Dimensions.get('window').width * 0.7,
    borderBottomWidth: 1,
    marginTop: 39,
    borderColor: '#757575',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  password: {
    paddingBottom: 0,
  },

  passwordIcon: {
    alignItems: 'flex-end',
    paddingTop: 10,
  },

  login: {
    alignItems: 'center',
  },

  forgotYourPassword: {
    color: '#00635D',
    marginTop: 20,
  },

  loginButton: {
    borderColor: '#382110',
    borderWidth: 0.7,
    backgroundColor: '#382110',
    width: Dimensions.get('window').width * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    borderRadius: 3,
    textAlign: 'center',
    height: Dimensions.get('window').height * 0.07,
  },

  loginTextStyle: {
    color: 'white',
  },

  errors: {
    color: 'crimson',
    textAlign: 'center',
  },
});
