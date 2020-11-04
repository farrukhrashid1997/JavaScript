import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import icons from '../../assets/icons';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const openNavigationDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.homeHeader}>
      <View style={styles.upperHeader}>
        <View style={styles.navDrawer}>
          <TouchableOpacity activeOpacity={1} onPress={openNavigationDrawer}>
            {icons.ThreeBars}
          </TouchableOpacity>
        </View>
        <View style={styles.searchInputView}>
          <View style={styles.searchIcon}>{icons.Search}</View>
          <TextInput
            placeholder="Search books"
            style={styles.searchInput}></TextInput>
          <View style={styles.verticalLine}></View>
          <View style={styles.cameraIcon}>
            <TouchableOpacity>{icons.Camera}</TouchableOpacity>
          </View>
        </View>
        <View style={styles.messageButton}>
          <TouchableOpacity activeOpacity={1}>{icons.Message}</TouchableOpacity>
        </View>
      </View>
      <View>
        
      </View>
    </View>
  );
}
