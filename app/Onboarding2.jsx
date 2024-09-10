import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';
import React, { useRef, useEffect }  from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router"
import { images } from "../constants";
import { theme } from "../tailwind.config";
import CustomButtons from "../components/CustomButtons";

const Onboarding2 = () => {
  const animation = useRef(null);
  return (
    <SafeAreaView >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <ImageBackground
        source={images.onboarding}
        resize="contain"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <View>
            <Text style={{fontSize: 30, fontWeight: '700'}}>Cooperative X</Text>
          </View>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: '85%',
              height: '85%',
              marginTop: -50
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('../animations/real-estate.json')}
          />
          <View style={{marginTop: -50, paddingHorizontal: 17}}>
            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: '600'}}>Participate in fractional ownership of real estate assets</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/Onboarding3')} style={{width: 60, height: 60, borderWidth: 2, borderRadius: 30, marginTop: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#9378FF'}}>
            <Image source={images.rightArrow} style={{width: 25, height: 25, tintColor: '#9378FF'}}/>
          </TouchableOpacity>
         
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({});
