import React, {useContext} from 'react';
import {View} from 'react-native';
import imagePicker from 'react-native-image-crop-picker';

import {ProductContext} from '../contexts/ProductContext';
import Button from '../components/Button';

const ImagePicker = ({navigation}) => {
  const {getProduct} = useContext(ProductContext);

  const getImageFromCamera = () => {
    imagePicker
      .openCamera({
        width: 300,
        height: 400,
        cropping: true,
      })
      .then(image => {
        getProduct(image);
        navigation.navigate('Details');
      })
      .catch(() => {
        navigation.navigate('Home');
      });
  };

  const getImageFromGallery = () => {
    imagePicker
      .openPicker({
        width: 300,
        height: 400,
        cropping: true,
      })
      .then(image => {
        getProduct(image);
        navigation.navigate('Details');
      })
      .catch(() => {
        navigation.navigate('Home');
      });
  };

  return (
    <View className="flex-1 flex flex-col gap-5 w-[50%] mx-auto justify-center items-center">
      <Button onPress={getImageFromCamera} text={'Open Camera'} />
      <Button onPress={getImageFromGallery} text={'Open Gallery'} />
    </View>
  );
};

export default ImagePicker;
