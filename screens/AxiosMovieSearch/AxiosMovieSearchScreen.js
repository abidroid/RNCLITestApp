import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  ScrollView,
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useState} from 'react';
import style from './style';
import axios from 'axios';
import MovieItem from '../../components/MovieScreenComponents/MovieItem';

const AxiosMovieSearchScreen = () => {
  const [movieName, setMovieName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});

  const getMovieDetails = async () => {
    setLoading(true);
    setError(null);

    let url = `https://www.omdbapi.com/?t=${movieName}&plot=full&apikey=94e188aa`;

    try {
      const response = await axios.get(url);
      const movieObject = response.data;

      if (movieObject.Response === 'False') {
        setError('Movie Not Found');
      } else {
        console.log(movieObject);
        setMovie(movieObject);
      }
    } catch (e) {
      setError('Movie Not Found');
    } finally {
      setLoading(false);
      setMovieName('');
    }
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
          if (movieName === '') {
            Alert.alert('Please provide movie name');
          }
          getMovieDetails();
        }}>
        <Text style={style.buttonText}>Search</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <ScrollView>
          <View style={style.movieDetailContainer}>
            <Image
              source={{uri: movie.Poster}}
              style={{width: 250, height: 400}}
            />

            <MovieItem title="Title" value={movie.Title} />
            <MovieItem title="Actors" value={movie.Actors} />
            <MovieItem title="Writers" value={movie.Writer} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default AxiosMovieSearchScreen;
