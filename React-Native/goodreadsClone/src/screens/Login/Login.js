import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import {useFormik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import Validator from './Validator';

export default function Login({navigation}) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      navigation.push('Homepage');
    },
    // validationSchema: Validator, #uncomment after done with testing
  });

  const [showPass, setShowPass] = useState(true);
  const [iconName, setIconName] = useState('eye-off');

  const handleIcon = (status, icon) => {
    setShowPass(status);
    setIconName(icon);
  };
  const toggleViewPassword = () => {
    if (showPass && iconName === 'eye-off') {
      handleIcon(false, 'eye');
    } else {
      handleIcon(true, 'eye-off');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.login}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          textContentType="emailAddress"
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
        />
        <Text style={styles.errors}>
          {formik.touched.email && formik.errors.email && formik.errors.email}
        </Text>
        <View style={styles.passwordView}>
          <TextInput
            placeholder="Goodreads password"
            textContentType="password"
            secureTextEntry={showPass}
            style={styles.password}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
          />
          <Icon
            name={iconName}
            size={25}
            color="grey"
            style={styles.passwordIcon}
            onPress={toggleViewPassword}
          />
        </View>
        <Text style={styles.errors}>
          {formik.touched.password &&
            formik.errors.password &&
            formik.errors.password}
        </Text>

        <Button
          text="Forgot your password?"
          textStyle={styles.forgotYourPassword}
        />
        <Button
          onPress={formik.handleSubmit}
          text="Log In"
          buttonStyle={styles.loginButton}
          textStyle={styles.loginTextStyle}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
