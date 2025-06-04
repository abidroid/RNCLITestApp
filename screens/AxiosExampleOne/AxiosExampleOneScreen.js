import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';

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
    <SafeAreaView>
      <Text>Get a Random Quote</Text>
      <TouchableOpacity>
        <Text>Get Quote</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator />
      ) : error != null ? (
        <Text>{error}</Text>
      ) : (
        <View>
          <Text>{quote.author}</Text>
          <Text>{quote.quote}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AxiosExampleOneScreen;
