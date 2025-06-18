import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import style from './style';

const ProductListScreen = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    setError(null);

    const url = 'https://dummyjson.com/products';

    try {
      const response = await axios.get(url);

      const jsonObject = response.data;
      console.log(jsonObject);
      setProducts(jsonObject.products);
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.heading}>Products List</Text>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
        showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={style.productItemContainer}>
              <Image source={{uri: item.thumbnail}} width={100} height={100} />
              <View style={{backgroundColor: 'white', flex: 1}}>
                <Text>{item.title}</Text>
                <Text>{item.category}</Text>

                <Text numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                <View style={style.priceContainer}>
                  <Text style={style.priceText}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ProductListScreen;
