import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import style from './style';
import LandingScreenItem from '../../components/LandingScreenItem/LandingScreenItem';

import { Routes } from '../../../navigation/Routes';

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
        <LandingScreenItem
          serialNo="5"
          title="Radio Button Example"
          subtitle="Gender Example"
          onPress={() => navigation.navigate(Routes.RadioButtonExample)}
        />
        <LandingScreenItem
          serialNo="6"
          title="Profile Image Example"
          subtitle="Profile Image Example"
          onPress={() => navigation.navigate(Routes.ProfileImageExample)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingScreen;
