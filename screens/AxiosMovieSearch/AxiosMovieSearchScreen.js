import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import style from './style';

const AxiosMovieSearchScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text>Movie Search</Text>
    </SafeAreaView>
  );
};

export default AxiosMovieSearchScreen;
