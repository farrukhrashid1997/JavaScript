import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';

const Button = ({text, icon, textStyle, buttonStyle, iconStyle, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={buttonStyle}>
        {icon && <Text style={iconStyle}>{icon}</Text>}
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  text: propTypes.string.isRequired,
};

Button.defaultProps = {
  icon: null,
  textStyle: null,
  buttonStyle: null,
  iconStyle: null,
  onPress: null,
};
