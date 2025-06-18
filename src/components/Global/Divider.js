import {StyleSheet, View} from 'react-native';

const Divider = () => {
  return <View style={style.divider} />;
};

const style = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});
export default Divider;
