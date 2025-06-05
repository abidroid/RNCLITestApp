import {SafeAreaView} from 'react-native-safe-area-context';
import {Alert, Text, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import style from './style';
import axios from 'axios';

const AxiosMovieSearchScreen = () => {
  const [movieName, setMovieName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMove] = useState({});

  const getMovieDetails = async () => {
    setLoading(true);
    
  };

  return (
    <SafeAreaView style={style.container}>
      <Text>Movie Search</Text>
      <TextInput
        style={style.input}
        placeholder="movie name"
        value={movieName}
        onChangeText={text => setMovieName(text)}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          console.log(movieName);
          if( movieName === ''){

            Alert.alert('Please provide movie name');
          }
        }}>
        <Text style={style.buttonText}>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AxiosMovieSearchScreen;
