import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({text, ...rest}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      className="p-3 text-black bg-[#e3a62f] rounded-md w-full items-center shadow-sm">
      <Text className="text-lg">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
