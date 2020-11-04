import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import React from 'react';


const icons = {
  Home: <Fontisto name="home" size={20} color="white"></Fontisto>,
  MyBooks: <MaterialIcons name="bookshelf" size={20} color="white" />,
  FindFriends: <FontAwesome5 name="user-friends" size={17} color="white" />,
  BookReader: <FontAwesome5 name="book-reader" size={40} color="#dad2bd" />,
  ThreeBars: <IonIcons name="reorder-three-outline" size={30} color="#352214" />,
  Message: <MaterialIcons name = "comment-processing-outline" size = {30} color = "#352214"/>,
  Search: <EvilIcons name = "search" size = {30} color = "#acacac"/>,
  Camera: <SimpleLineIcons name = "camera" size = {18} color = "#d7d7d7"/>
};

export default icons;
