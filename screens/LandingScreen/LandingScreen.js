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
        <LandingScreenItem
          serialNo="2"
          title="Axios Get Example"
          subtitle="Movie Search Screen"
          onPress={() => navigation.navigate(Routes.AxiosMovieSearch)}
        />
        <LandingScreenItem
          serialNo="3"
          title="Axios Get Example"
          subtitle="Product List Screen"
          onPress={() => navigation.navigate(Routes.ProdudutList)}
        />
        <LandingScreenItem
          serialNo="4"
          title="Axios POST Example"
          subtitle="Add a Product"
          onPress={() => navigation.navigate(Routes.AxiosPostRequest)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingScreen;
