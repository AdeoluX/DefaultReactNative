import { ScrollView, StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { useFonts } from "expo-font";
import FormField from '../../components/FormField';
import { Link, router } from 'expo-router';
import CustomButtons from '../../components/CustomButtons';

const SignUp = () => {
  const [fontsLoaded, error] = useFonts({
    "Alegreya-Black": require("../../assets/fonts/Alegreya-Black.ttf"),
    "Alegreya-Bold": require("../../assets/fonts/Alegreya-Bold.ttf"),
    "Alegreya-ExtraBold": require("../../assets/fonts/Alegreya-ExtraBold.ttf"),
    "Alegreya-Medium": require("../../assets/fonts/Alegreya-Medium.ttf"),
    "Alegreya-Regular": require("../../assets/fonts/Alegreya-Regular.ttf"),
    "Alegreya-SemiBold": require("../../assets/fonts/Alegreya-SemiBold.ttf")
  });

  const signUp = () => {
    router.push('home')
  }
  return (
    <SafeAreaView style={{backgroundColor: '#253334'}}>
      <KeyboardAvoidingView 
      behavior={'position'} enabled>
        <ScrollView contentContainerStyle={{ height: "100%", backgroundColor: '#253334' }}>
          <View style={{backgroundColor: '#253334', height: '100%', justifyContent: 'center', flex: 1}}>
            <View style={{padding: 20, height: '85%'}}>
              <Image source={images.logoImage} style={{height: 60, width: 60, backgroundColor: 'transparent'}}/>
              <Text style={{fontFamily: 'Alegreya-SemiBold', fontSize: 30, color: '#FFF'}}>Sign Up</Text>
              <Text style={{fontFamily: 'Alegreya-Regular', fontSize: 22, color: '#FFF'}}>Sign up now and start praying and experience God.</Text>
              <FormField placeholder={'Name'} textStyle={{fontFamily: 'Alegreya-Regular', fontSize: 18, color: '#BEC2C2'}}/>
              <FormField placeholder={'Email Address'} textStyle={{fontFamily: 'Alegreya-Regular', fontSize: 18, color: '#BEC2C2'}}/>
              <FormField placeholder={'Password'} textStyle={{fontFamily: 'Alegreya-Regular', fontSize: 18, color: '#BEC2C2'}}/>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 30}}>
                {/* <Link href="/Onboarding" style={{marginTop: 10, fontFamily: "Alegreya-Medium", fontSize: 16, color: '#FFF'}}>Forgot Password?</Link> */}
              </View>
              <CustomButtons title={'SIGNUP'} textStyles={{fontFamily: 'Alegreya-Medium', fontSize: 25, color: "#FFF"}} containerStyles={{borderRadius: 10, marginBottom: 20}} handlePress={signUp}/>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:20, fontFamily: "Alegreya-Regular", color: '#FFF'}}>Already have an account? <Link href="/sign-in" style={{fontFamily: "Alegreya-Bold"}}>Sign In</Link></Text>
              </View>
            </View>
            <Image source={images.authBackground} style={{width: Dimensions.get('screen').width, height: '30%', resizeMode:"contain", position: 'absolute', bottom: 0, zIndex: -1}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})