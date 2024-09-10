import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButtons = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style = {{backgroundColor: '#7C9A92', height: 62, alignItems: 'center', justifyContent: 'center', ...containerStyles}}
      disabled={isLoading}
    >
      <Text style={{color: 'black', fontSize: 30, ...textStyles}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;
