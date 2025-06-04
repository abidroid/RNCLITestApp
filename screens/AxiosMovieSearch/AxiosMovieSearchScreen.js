import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import style from './style';
import { TextInput } from 'react-native-gesture-handler';

const AxiosMovieSearchScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text>Movie Search</Text>
      <TextInput style={style.input}/>
    </SafeAreaView>
  );
};

export default AxiosMovieSearchScreen;
