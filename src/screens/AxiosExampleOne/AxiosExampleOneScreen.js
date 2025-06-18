import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import axios from 'axios';
import {useEffect, useState} from 'react';
import style from './style';

const AxiosExampleOneScreen = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomQuote = async () => {
    setLoading(true);
    setError(null);
    const url = 'https://dummyjson.com/quotes/random';

    /*
    {
        "id": 349,
        "quote": "There is a field beyond all notions of right and wrong. Come, meet me there.",
        "author": "Rumi"
    }
    */
    try {
      const response = await axios.get(url);

      setQuote(response.data);
    } catch (e) {
      setError('Could not');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.heading}>Get a Random Quote</Text>
      <TouchableOpacity style={style.button} onPress={()=> getRandomQuote()}>
        <Text>Get Quote</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator />
      ) : error != null ? (
        <Text>{error}</Text>
      ) : (
        <View style={{gap: 8}}>
          <Text style={style.textStyle}>{quote.author}</Text>
          <Text style={style.textStyle}>{quote.quote}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AxiosExampleOneScreen;
