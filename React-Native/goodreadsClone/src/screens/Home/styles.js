import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: '#f4f1ea',
  },

  upperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 4,
  },

  navDrawer: {
    flex: 2.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageButton: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchInputView: {
    backgroundColor: 'white',
    flex: 8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  verticalLine: {
    height: 22,
    borderLeftColor: '#d7d7d7',
    borderLeftWidth: 2,
    flex: 0.05,
  },

  searchInput: {
    flex: 4,
  },

  searchIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraIcon: {
    flex: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
});
