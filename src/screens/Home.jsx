import React, {useContext} from 'react';
import {Text, View, StatusBar} from 'react-native';
import CartIcon from '../icons/cart.svg';
import BagIcon from '../icons/bag.svg';
import Button from '../components/Button';
import {ProductContext} from '../contexts/ProductContext';

const Home = ({navigation}) => {
  const {applyKeyword} = useContext(ProductContext);

  const imagePicker = keyword => {
    applyKeyword(keyword);
    navigation.navigate('ImagePicker');
  };

  return (
    <>
      <StatusBar hidden />
      <View className="flex-1 bg-blue-200 w-full" style={{padding: 15}}>
        <View
          className="flex flex-row justify-end"
          style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <CartIcon width={40} height={40} />
        </View>
        <View className="flex-1 flex-col justify-evenly w-full">
          <View className="flex flex-col justify-center items-center gap-2 w-full">
            <BagIcon width={70} height={70} />
            <Text className="text-4xl font-semibold text-black antialiased tracking-wider">
              Grocery Buddy
            </Text>
          </View>
          <View className="flex flex-col justify-center items-center">
            <View className="flex flex-col justify-center items-center gap-3 w-5/6">
              <Button
                onPress={() => imagePicker('text')}
                text={'Get the product by text'}
              />
              <Button
                onPress={() => imagePicker('shape')}
                text={'Get the product by shape'}
              />
              <Button
                onPress={() => imagePicker('receipt')}
                text={'Receipt reader'}
              />
              <Button
                onPress={() => imagePicker('macros')}
                text={'Macros reader'}
              />
            </View>
          </View>
          <View className="flex flex-col items-center">
            <Text className="text-sm text-black">BY JOĀO MOTA</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
