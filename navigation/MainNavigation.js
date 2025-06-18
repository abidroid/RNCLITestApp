import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../src/screens/LandingScreen/LandingScreen';
import {Routes} from './Routes';
import AxiosExampleOneScreen from '../src/screens/AxiosExampleOne/AxiosExampleOneScreen';
import AxiosMovieSearchScreen from '../src/screens/AxiosMovieSearch/AxiosMovieSearchScreen';
import ProductListScreen from '../src/screens/ProductList/ProductListScreen';
import AxiosPostRequestScreen from '../src/screens/AxiosPostRequest/AxiosPostRequestScreen';
import RadioButtonExampleScreen from '../src/screens/RadioButtonExample/RadioButtonExampleScreen';
import ProfileImageScreen from '../src/screens/ProfileImage/ProfileImageScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Landing}
      //screenOptions={{header: () => null, headerShown: false}}
      >
      <Stack.Screen name={Routes.Landing} component={LandingScreen} />
      <Stack.Screen
        name={Routes.AxiosExampleOne}
        component={AxiosExampleOneScreen}
      />
      <Stack.Screen
        name={Routes.AxiosMovieSearch}
        component={AxiosMovieSearchScreen}
      />
      <Stack.Screen
        name={Routes.ProdudutList}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={Routes.AxiosPostRequest}
        component={AxiosPostRequestScreen}
      />
      <Stack.Screen
        name={Routes.RadioButtonExample}
        component={RadioButtonExampleScreen}
      />
      <Stack.Screen
        name={Routes.ProfileImageExample}
        component={ProfileImageScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
