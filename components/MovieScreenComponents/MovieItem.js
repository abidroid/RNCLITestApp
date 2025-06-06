import {View, Text} from 'react-native';
import style from './style';
import Divider from '../Global/Divider';

const MovieItem = (props) => {

    return (
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>
            <Divider />
            <Text style={style.value}>{props.value}</Text>
        </View>
    );
};

export default MovieItem;
