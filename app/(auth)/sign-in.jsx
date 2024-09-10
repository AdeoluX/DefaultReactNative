import { ScrollView, StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { useFonts } from "expo-font";
import FormField from '../../components/FormField';
import { Link } from 'expo-router';
import CustomButtons from '../../components/CustomButtons';

const SignIn = () => {
  const [fontsLoaded, error] = useFonts({
    "Alegreya-Black": require("../../assets/fonts/Alegreya-Black.ttf"),
    "Alegreya-Bold": require("../../assets/fonts/Alegreya-Bold.ttf"),
    "Alegreya-ExtraBold": require("../../assets/fonts/Alegreya-ExtraBold.ttf"),
    "Alegreya-Medium": require("../../assets/fonts/Alegreya-Medium.ttf"),
    "Alegreya-Regular": require("../../assets/fonts/Alegreya-Regular.ttf"),
    "Alegreya-SemiBold": require("../../assets/fonts/Alegreya-SemiBold.ttf")
  });
  return (
    <SafeAreaView style={{backgroundColor: '#253334'}}>
      <KeyboardAvoidingView 
      behavior={'position'} enabled>
        <ScrollView contentContainerStyle={{ height: "100%", backgroundColor: '#253334' }}>
          <View style={{backgroundColor: '#253334', height: '100%', justifyContent: 'center', flex: 1}}>
            <View style={{padding: 20, height: '85%'}}>
              <Image source={images.logoImage} style={{height: 60, width: 60, backgroundColor: 'transparent'}}/>
              <Text style={{fontFamily: 'Alegreya-SemiBold', fontSize: 30, color: '#FFF'}}>Sign In</Text>
              <Text style={{fontFamily: 'Alegreya-Regular', fontSize: 22, color: '#FFF'}}>Sign in now to access your prayers  and saved sermons</Text>
              <FormField placeholder={'Email Address'} textStyle={{fontFamily: 'Alegreya-Regular', fontSize: 18, color: '#BEC2C2'}}/>
              <FormField placeholder={'Password'} textStyle={{fontFamily: 'Alegreya-Regular', fontSize: 18, color: '#BEC2C2'}}/>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 30}}>
                <Link href="/Onboarding" style={{marginTop: 10, fontFamily: "Alegreya-Medium", fontSize: 16, color: '#FFF'}}>Forgot Password?</Link>
              </View>
              <CustomButtons title={'LOGIN'} textStyles={{fontFamily: 'Alegreya-Medium', fontSize: 25, color: "#FFF"}} containerStyles={{borderRadius: 10, marginBottom: 20}}/>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:20, fontFamily: "Alegreya-Regular", color: '#FFF'}}>Don't have an account? <Link href="/sign-up" style={{fontFamily: "Alegreya-Bold"}}>Sign Up</Link></Text>
              </View>
            </View>
            <Image source={images.authBackground} style={{width: Dimensions.get('screen').width, height: '30%', resizeMode:"contain", position: 'absolute', bottom: 0, zIndex: -1}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})