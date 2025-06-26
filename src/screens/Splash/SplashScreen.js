import { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Routes } from '../../../navigation/Routes';

const SplashScreen = ({navigation}) => {

    useEffect(()=>{

      const timer = setTimeout(() => {

        navigation.replace(Routes.Landing); // Navigate and remove from stack


      }, 3000);

      return () => clearTimeout(timer); // Cleanup if unmounted early

    }, [
      navigation
    ]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a84ff',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default SplashScreen;
