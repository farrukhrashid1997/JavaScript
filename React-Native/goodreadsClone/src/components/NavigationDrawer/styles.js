import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#5c5c5c',
    marginBottom: 10,
    flexDirection: 'row',
    paddingVertical: 35,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: -5,
  },

  drawerHeaderText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    marginHorizontal: 12,
  },

  drawer: {
    backgroundColor: '#333333',
  },

  drawerItemlabel: {
    color: 'white',
    justifyContent: 'space-around',
  },

  iconStyle: {
    marginRight: 10,
  },

  drawerItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  bookHeaderIcon: {
    backgroundColor: '#efede0',
    borderRadius: 25,
    padding: 5,
  },

  horizontalRule: borderWidth => ({
    borderColor: '#4b4b4b',
    borderWidth: borderWidth,
    alignSelf: 'stretch',
  }),

  readingChallengeView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 5,
    marginHorizontal: 10,
  },

  readingChallengeText: {
    color: 'white',
    fontSize: 13,
    flex: 2,
  },

  readingProgressBar: {
    width: `${80}%`,
    height: 17,
    backgroundColor: '#767676',
  },

  readingProgressIndicator: width => ({
    backgroundColor: `#d9d9d9`,
    width: `${width}%`,
    height: 17,
  }),

  readingProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
  },

  booksRead: {
    color: '#7c7c7c',
    paddingHorizontal: 10,
  },
});
