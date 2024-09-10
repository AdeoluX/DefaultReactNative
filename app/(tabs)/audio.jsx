import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useFonts } from "expo-font";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { icons, images } from '../../constants'
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const audio = () => {
  const [fontsLoaded, error] = useFonts({
    "Alegreya-Black": require("../../assets/fonts/Alegreya-Black.ttf"),
    "Alegreya-Bold": require("../../assets/fonts/Alegreya-Bold.ttf"),
    "Alegreya-ExtraBold": require("../../assets/fonts/Alegreya-ExtraBold.ttf"),
    "Alegreya-Medium": require("../../assets/fonts/Alegreya-Medium.ttf"),
    "Alegreya-Regular": require("../../assets/fonts/Alegreya-Regular.ttf"),
    "Alegreya-SemiBold": require("../../assets/fonts/Alegreya-SemiBold.ttf")
  });
  const [playing, setPlaying] = useState(false)
  const [currentAudio_, setCurrentAudio] = useState()
  const [sound, setSound] = useState(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const item = useLocalSearchParams();
  // console.log(item)
  useEffect(() => {
    const unloadSoundOnLoad = async () => {
      if (sound) {
        console.log('Unloading Sound on Page Load');
        await sound.unloadAsync();
        setSound(null); // Reset sound state
      }
    };

    // Call unloadSoundOnLoad when the component mounts
    unloadSoundOnLoad();

    // Cleanup function to unload the sound when the component unmounts
    return () => {
      if (sound) {
        console.log('Unloading Sound on Component Unmount');
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    async function getAudio () {
      const audio = await AsyncStorage.getItem('currentAudio')
      await setCurrentAudio(JSON.parse(audio))
    }
    getAudio()
  }, [item])


  const loadAndPlaySound = async () => {
    // const audio = await As
    const { sound } = await Audio.Sound.createAsync(
      { uri: currentAudio_.audioUrl },
      { shouldPlay: true }
    );
    setSound(sound);
    setPlaying(true);

    sound.setOnPlaybackStatusUpdate((status) => {
      if(status.isLoaded){
        setPosition(status.positionMillis);
        setDuration(status.durationMillis);
        if (status.didJustFinish) {
          setPlaying(false);
        }
      }
      
    });
    // Optionally start a timer to update the slider position every second
    const updatePosition = () => {
      sound.getStatusAsync().then((status) => {
        if (status.isPlaying) {
          setPosition(status.positionMillis);
        }
      });
    };

    const interval = setInterval(updatePosition, 1000);

    // Clean up the interval when the component unmounts or the sound unloads
    return () => clearInterval(interval);
  };

  const playSound = async () => {
    if (sound) {
      console.log('playing already')
      await sound.playAsync();
      setPlaying(true);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setPlaying(false);
    }
  };

  const handlePlayPause = () => {
    console.log('I am in')
    if (playing) {
      console.log('paused')
      pauseSound();
    } else if(!playing && sound) {
      console.log('playing')
      playSound();
    }
     else {
      console.log('load')
      loadAndPlaySound();
    }
  };

  const handleSeekSlider = async (value) => {
    if (sound) {
      const seekPosition = value * duration;
      await sound.setPositionAsync(seekPosition);
    }
  };

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#253334'}}>
      <View style={{flex: 1, backgroundColor: '#253334', paddingHorizontal: 20}}>
        <View style={{flex: 0.10}}>
          
        </View>
        <View style={{flex: 0.70, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 305, height: 305, borderRadius: 305/2, borderWidth: 1, borderColor: '#FFF', marginBottom: 28, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={images.vinylRecord} style={{width: 300, height: 300}}/>
          </View>
          {<Text style={{fontFamily: "Alegreya-SemiBold", fontSize: 30, color: '#FFF'}}>{currentAudio_?.title}</Text>}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', flex: 0.05}}>
          <Text style={{fontFamily: 'Alegreya-SemiBold', color: '#FFF'}}>{formatTime(position)}</Text>
          <Slider
            style={{width: '80%'}}
            minimumValue={0}
            maximumValue={1}
            value={position / duration}
            onValueChange={handleSeekSlider}
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="gray"
            thumbTintColor="#FFF"
          />
          <Text style={{fontFamily: 'Alegreya-SemiBold', color: '#FFF'}}>{formatTime(duration)}</Text>
        </View>
        {/* <View style={{borderWidth: .5, width: '90%', alignSelf: 'center', borderColor: '#FFF'}}></View> */}
        <View style={{flex: 0.15}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity style={{width: 70, height: 70, borderWidth: 1, borderColor:'#FFF', borderRadius: 35, padding: 5, justifyContent: 'center', alignItems:'center'}}>
              <Image source={icons.rewindIcon} style={{alignSelf: 'center', width: 30, height: 30, tintColor: '#FFF'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 70, height: 70, borderWidth: 1, borderColor:'#FFF', borderRadius: 35, padding: 5, justifyContent: 'center', alignItems:'center'}} onPress={() => handlePlayPause()}>
              {
                playing 
                ? 
                <Image source={icons.pauseIcon} style={{alignSelf: 'center', width: 30, height: 30, tintColor: '#FFF'}}/>
                : 
                <Image source={icons.playIcon} style={{alignSelf: 'center', width: 30, height: 30, tintColor: '#FFF'}}/>
              }
            </TouchableOpacity>
            <TouchableOpacity style={{width: 70, height: 70, borderWidth: 1, borderColor:'#FFF', borderRadius: 35, padding: 5, justifyContent: 'center', alignItems:'center'}}>
              <Image source={icons.fastForwardIcon} style={{alignSelf: 'center', width: 30, height: 30, tintColor: '#FFF'}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default audio

const styles = StyleSheet.create({})
