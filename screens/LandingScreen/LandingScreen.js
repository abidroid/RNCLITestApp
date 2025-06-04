import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import style from './style';
import {Routes} from '../../navigation/Routes';
import LandingScreenItem from '../../components/LandingScreenItem/LandingScreenItem';

const LandingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.heading}>Welcome</Text>
        <LandingScreenItem
          serialNo="1"
          title="Axios Get Example"
          subtitle="Dispaly a Random Quote"
          onPress={() => navigation.navigate(Routes.AxiosExampleOne)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingScreen;
