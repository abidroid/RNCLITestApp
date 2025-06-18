import {TouchableOpacity, View, Text} from 'react-native';
import style from './style';

const LandingScreenItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={style.listTile}>
        <View style={style.leading}>
          <Text>{props.serialNo}</Text>
        </View>
        <View style={style.listTileColumn}>
          <Text style={style.title}>{props.title}</Text>
          <Text style={style.subtitle}>{props.subtitle}</Text>
        </View>
        <View>
          <Text>Go</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LandingScreenItem;
