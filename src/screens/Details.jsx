import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

const Details = () => {
  const {product, isLoading, keyword} = useContext(ProductContext);

  let productDetails;

  switch (keyword) {
    case 'text':
      productDetails = (
        <>
          <Text className="text-black text-xl font-bold">
            {product?.suggested_product}
          </Text>
          <Text className="text-black/70 text-md">
            {product?.suggested_location_product}
          </Text>
          <Text className="text-black/80 text-lg text-justify">
            {product?.suggested_description_product}
          </Text>
        </>
      );
      break;
    case 'shape':
      productDetails = (
        <>
          <Text className="text-black text-xl font-bold">
            {product?.suggested_product}
          </Text>
          <Text className="text-black/80 text-lg text-justify">
            {product?.suggested_description_product}
          </Text>
        </>
      );
      break;
    case 'receipt':
      productDetails = (
        <>
          <Text className="text-black/80 text-lg">
            {product?.suggested_items_and_price}
          </Text>
        </>
      );
      break;
    case 'macros':
      productDetails = (
        <>
          <Text className="text-black/80 text-lg text-justify">
            {product?.suggested_macros_description}
          </Text>
        </>
      );
      break;
    default:
      productDetails = (
        <Text className="text-2xl">Something went wrong. Please try again</Text>
      );
      break;
  }

  console.log(product);

  return (
    <View>
      {isLoading ? (
        <Text className="text-3xl font-bold p-3">Loading . . .</Text>
      ) : (
        <View className="flex flex-col gap-3 py-3 px-4">{productDetails}</View>
      )}
    </View>
  );
};

export default Details;
