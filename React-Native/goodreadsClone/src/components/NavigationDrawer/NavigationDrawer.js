import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import styles from './styles';
import icons from '../../assets/icons';
import DrawerItem from '../Button';

export default function NavigationDrawer({state, navigation}) {
  return (
    <DrawerContentScrollView style={styles.drawer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.bookHeaderIcon}>{icons.BookReader}</Text>
        <Text style={styles.drawerHeaderText}>Username</Text>
      </View>

      <DrawerItem
        onPress={() => navigation.navigate('Home')}
        text="Home"
        icon={icons.Home}
        iconStyle={styles.iconStyle}
        buttonStyle={styles.drawerItemStyle}
        textStyle={styles.drawerItemlabel}
      />
      <DrawerItem
        onPress={() => navigation.navigate('MyBooks')}
        text="My Books"
        iconStyle={styles.iconStyle}  
        icon={icons.MyBooks}
        buttonStyle={styles.drawerItemStyle}
        textStyle={styles.drawerItemlabel}
      />
      <DrawerItem
        onPress={() => navigation.navigate('FindFriends')}
        text="Find your Friends"
        icon={icons.FindFriends}
        iconStyle={styles.iconStyle}
        buttonStyle={styles.drawerItemStyle}
        textStyle={styles.drawerItemlabel}
      />

      <View style={styles.horizontalRule(1)}></View>
      <View style={styles.readingChallengeView}>
        <Text style={styles.readingChallengeText}>Reading Challenge</Text>
        <View style={styles.readingProgress}>
          <View style={styles.readingProgressBar}>
            <Text style={styles.readingProgressIndicator(20)}></Text>
          </View>
          <Text style={styles.booksRead}>1/30</Text>
        </View>
      </View>
      <View style={styles.horizontalRule(0.5)}></View>
    </DrawerContentScrollView>
  );
}
