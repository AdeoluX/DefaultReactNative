import { Image, ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { useFonts } from "expo-font";
import { Link, router } from "expo-router"
import { theme } from "../tailwind.config";
import CustomButtons from "../components/CustomButtons";

const Onboarding = () => {
  const [fontsLoaded, error] = useFonts({
    "Alegreya-Black": require("../assets/fonts/Alegreya-Black.ttf"),
    "Alegreya-Bold": require("../assets/fonts/Alegreya-Bold.ttf"),
    "Alegreya-ExtraBold": require("../assets/fonts/Alegreya-ExtraBold.ttf"),
    "Alegreya-Medium": require("../assets/fonts/Alegreya-Medium.ttf"),
    "Alegreya-Regular": require("../assets/fonts/Alegreya-Regular.ttf"),
    "Alegreya-SemiBold": require("../assets/fonts/Alegreya-SemiBold.ttf")
  });
  return (
    // <SafeAreaView >
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
          <Image source={images.logoImage} style={{width: 250, height: 200}}/>
          <Text style={{fontFamily: "Alegreya-Bold", fontSize: 34, color: '#FFF'}}>WELCOME</Text>
          <Text style={{color: '#FFF', fontSize: 20, fontFamily: 'Alegreya-Regular'}}>Do meditation Stay focused.</Text>
          <Text style={{color: '#FFF', fontSize: 20, fontFamily: 'Alegreya-Regular'}}>Live a healthy life.</Text>

          <CustomButtons handlePress={()=> router.push('/sign-in')} title={'Login With Email'} textStyles={{fontFamily: 'Alegreya-Medium', fontSize: 25, color: '#FFF'}} containerStyles={{backgroundColor: "#7C9A92", width: 321, borderRadius: 10, marginTop: 119}}/>
          <Text style={{fontFamily: 'Alegreya-Regular', marginTop: 18, fontSize: 20, color: '#FFF'}}>Don't have an account? <Link href="/sign-up" style={{fontFamily: "Alegreya-ExtraBold"}}>Sign Up</Link></Text>
        </ImageBackground>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
