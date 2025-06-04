import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 16,
    gap: 8,
    backgroundColor: 'lightblue',
  },
  heading: {fontSize: 30, fontWeight: 'bold', textAlign: 'center'},
  button: {
    backgroundColor: '#abcdef',
    width: 200,
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textStyle: {textAlign: 'center', fontSize: 24},
});

export default style;
