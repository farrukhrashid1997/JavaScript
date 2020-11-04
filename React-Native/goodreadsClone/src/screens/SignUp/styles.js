import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: (backgroundColor, borderColor, width, height) => ({
    backgroundColor: backgroundColor,
    width: width * 0.6,
    borderColor: borderColor,
    borderWidth: 0.7,
    height: height * 0.07,
    justifyContent: 'center',
    marginTop: 11.5,
    borderRadius: 3,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  icon: {
    marginHorizontal: 7,
  },
  text: (color, fontWeight) => ({
    color: color,
    fontWeight: fontWeight,
  }),

  signupscreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  goodreadsLogo: (width, height) => ({
    margin: 20,
    width: width * 0.72,
    height: height * 0.093,
  }),
  intro: {
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default styles;
