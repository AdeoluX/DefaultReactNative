import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, {useState, useEffect} from "react";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import samples from "../../samples/samples"
import StatusBox from "../../components/StatusBox";
import PrayerCards from "../../components/PrayerCards";

const home = () => {
  const [fontsLoaded, error] = useFonts({
    "Alegreya-Black": require("../../assets/fonts/Alegreya-Black.ttf"),
    "Alegreya-Bold": require("../../assets/fonts/Alegreya-Bold.ttf"),
    "Alegreya-ExtraBold": require("../../assets/fonts/Alegreya-ExtraBold.ttf"),
    "Alegreya-Medium": require("../../assets/fonts/Alegreya-Medium.ttf"),
    "Alegreya-Regular": require("../../assets/fonts/Alegreya-Regular.ttf"),
    "Alegreya-SemiBold": require("../../assets/fonts/Alegreya-SemiBold.ttf")
  });
  const [sample, setSample] = useState(null)
  useEffect(() => {
    const array = samples()
    setSample(array)
  }, [0])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#253334'}}>
      <View style={{flex: 1, backgroundColor: '#253334'}}>
        <View style={{flex: .40}}>
          <View style={{flex: 1/3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: -30}}>
            <Image source={icons.menuIcon} style={{width: 30, height: 30, tintColor: 'white'}}/>
            <Image source={images.logoImage} style={{width: 70, height: 70}}/>
            <TouchableOpacity style={{width: 40, height: 40, borderWidth: 1.5, borderRadius: 40/2, borderColor: '#fff'}}></TouchableOpacity>
          </View>
          <View style={{flex: 1/3, paddingHorizontal: 20, justifyContent: 'center'}}>
            <Text style={{color: '#fff', fontFamily:'Alegreya-SemiBold', fontSize: 30}}>Welcome back, Banke!</Text>
            <Text style={{color: "#fff", fontFamily:'Alegreya-Regular', fontSize: 22}}>How are you doing today ?</Text>
          </View>
          <View style={{flex: 1/3, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 1}}>
              {!sample ? <Text>Loading</Text> : <ScrollView horizontal contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} showsHorizontalScrollIndicator={false}>
                {sample?.statuses?.map(object => (
                  <StatusBox key={object.id} image={object.image} name={object.name} fontFamily={'Alegreya-Regular'}/>
                ))}
              </ScrollView>}
            </View>  
          </View>
        </View>
        <View style={{flex: .6}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 1, height: '100%'}}>
            {!sample ? 
              <Text>Loading</Text> 
              : 
              <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} showsVerticalScrollIndicator={false} >
                {
                  sample?.prayers?.map(object => (
                    <PrayerCards key={object.id} media={object.media} title={object.title} prayer={object.prayer} fontFamily={'Alegreya-SemiBold'} type={object.type} description={object.description} audioUrl={object.audioUrl}/>
                  ))
                }
              </ScrollView>
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;
