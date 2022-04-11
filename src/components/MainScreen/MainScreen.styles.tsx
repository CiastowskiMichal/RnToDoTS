import { StatusBar, StyleSheet } from 'react-native';

const mainscreen = StyleSheet.create({
  appTitle: {
    textAlign: 'center',
    color: '#2E4172',
    fontSize: 30,
    fontStyle: 'normal',
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default mainscreen;
