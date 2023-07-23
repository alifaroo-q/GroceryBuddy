import React, {useContext} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';

import CartIcon from '../icons/cart.svg';
import heroImage from '../icons/cover.jpg';
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
      <View className="flex-1 bg-[#9ecaf7] w-full" style={{padding: 20}}>
        <View
          className="flex flex-row justify-end"
          style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <CartIcon width={40} height={40} />
        </View>
        <View className="flex-1 flex-col justify-evenly items-center w-full">
          <Image className=" w-3/4 h-2/6" source={heroImage} />
          <View className="flex flex-col items-center w-full">
            <View className="flex flex-col items-center gap-3 w-5/6">
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
          <View style={{marginTop: 10}} className="flex flex-col items-center">
            <Text className="text-sm text-black">BY JOĀO MOTA</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
