import {createContext, useState} from 'react';

import axios from 'axios';

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
      .post(`http://192.168.0.103:8080/detect-${keyword}`, image, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      })
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
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
