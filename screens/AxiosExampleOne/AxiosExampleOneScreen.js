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
      if (response.status === '200') {
        setQuote(response.data);
      } else {
        console.log('Not Found');
      }
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
      if( loading){<ActivityIndicator />}
      else if( error ){<Text>{error}</Text>}
      else
      {
        <View>
          <Text>{quote.author}</Text>
          <Text>{quote.quote}</Text>
        </View>
      }
    </SafeAreaView>
  );
};

export default AxiosExampleOneScreen;
