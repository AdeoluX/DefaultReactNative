import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  containerStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ paddingVertical: 2, ...containerStyles }}>
      <Text style={{ color: "gray" }}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#BEC2C2",
          width: "100%",
          height: 60,
          paddingHorizontal: 10,
          alignItems: "center",
          ...otherStyles
        }}
      >
        <TextInput
          style={{ flex: 1, color: "#9378FF", fontWeight: '600', ...props.textStyle }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#BEC2C2"}
          onChangeText={handleChangeText}
          secureTextEntry={(title === "Password" || placeholder?.toLowerCase() === 'password' || placeholder?.toLowerCase() === 'confirm password') && !showPassword}
        />
        {(title === "Password" || placeholder?.toLowerCase() === 'password' || placeholder?.toLowerCase() === 'confirm password') && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 30, height: 30, tintColor: '#9378FF' }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
