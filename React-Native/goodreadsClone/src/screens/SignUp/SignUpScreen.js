import React, {useState, useEffect} from 'react';
import {View, Text, Image, useWindowDimensions, StatusBar} from 'react-native';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import strings from '../../localisation';
import styles from './styles';
import CustomModule from '../../customModules/CustomModule';

export default function SignUpScreen({navigation}) {
  CustomModule.show();
  const [deviceId, setDeviceId] = useState('');
  const {width, height} = useWindowDimensions();
  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        const id = await CustomModule.getDeviceId();
        setDeviceId(id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDeviceId();
  }, []);
  return (
    <View style={styles.signupscreen}>
      {/* <Text>{deviceId}</Text> */}
      <Image
        source={require('../../assets/images/goodreads-logo.png')}
        style={styles.goodreadsLogo(width, height)}
      />
      <View style={styles.intro}>
        <Text>{strings.morebooks}</Text>
        <Text>{strings.scanFeature}</Text>
        <Text>{strings.readersRecommend}</Text>
      </View>
      <Button
        text="Continue With Facebook"
        icon={<Icon name="facebook-square" size={15} color="white" />}
        buttonStyle={styles.buttonStyle('#3B5998', '#3B5998', width, height)}
        iconStyle={styles.icon}
        textStyle={styles.text('white')}
      />
      <Button
        text="Continue With Amazon"
        icon={<Icon name="amazon" size={15} color="black" />}
        buttonStyle={styles.buttonStyle('#f1c75e', '#6E5C4C', width, height)}
        iconStyle={styles.icon}
        textStyle={styles.text('black')}
      />
      <Button
        text="Sign up with email"
        buttonStyle={styles.buttonStyle('white', '#6E5C4C', width, height)}
        iconStyle={styles.icon}
        textStyle={styles.text('#58371F', 'bold')}
      />
      <View style={styles.loginText}>
        <Text>{strings.alreadyAMember}</Text>
        <Button
          text=" Log In"
          textStyle={styles.text('#00635D')}
          onPress={() => navigation.push('Log In')}
        />
      </View>
    </View>
  );
}
