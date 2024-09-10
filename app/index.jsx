// import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { ScrollView, Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";

const App = () => {
  const { isLoading, isLoggenIn, splash, setSplash } = useGlobalContext();
  
  useEffect(() => {
    const splasher = async () => {
      setTimeout(() => setSplash(true), 10000);
    };
    splasher();
  }, []);
  if(isLoggenIn) return <Redirect href="/home" />
  else if (splash) return <Redirect href="/Onboarding" />;
  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
        <ImageBackground
        source={images.splashBackground}
        resize="contain"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image source={images.logoImage} style={{width: 300, height: 300}}/>
        </ImageBackground>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
