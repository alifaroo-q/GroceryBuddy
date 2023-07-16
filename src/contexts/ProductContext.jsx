import {createContext, useState} from 'react';
import {ToastAndroid} from 'react-native';

import axios from 'axios';

const BASE_URL = 'https://grocery-buddy-backend.onrender.com';

export const ProductContext = createContext({
  product: {},
  isLoading: false,
  keyword: '',
  applyKeyword: () => {},
  getProductByText: () => {},
});

export const ProductProvider = ({children}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const applyKeyword = keyword => {
    setKeyword(keyword);
  };

  const getProduct = img => {
    setIsLoading(true);

    const image = new FormData();
    image.append('image', {
      uri: img.path,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    axios
      .post(`${BASE_URL}/detect-${keyword}`, image, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      })
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        ToastAndroid.show(err.message, ToastAndroid.LONG);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const value = {product, getProduct, isLoading, keyword, applyKeyword};
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
