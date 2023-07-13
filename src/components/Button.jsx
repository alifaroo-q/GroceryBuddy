import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, ...rest}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      className="p-3 text-black bg-[#ffc983] rounded-md w-full items-center shadow-lg">
      <Text className="text-lg">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
