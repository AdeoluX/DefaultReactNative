import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PrayerCards = ({media, title, prayer, fontFamily, type='prayer', description, audioUrl}) => {
  return (
    <View style={{width: 339, height: 180, backgroundColor: '#F7F3F0', margin: 5, padding: 10, flex: 1, flexDirection: 'row', borderRadius: 10}}>
        { 
            type === 'prayer' 
            ? 
            <>
                <View style={{flex: 1/2, justifyContent: 'center', flexDirection: 'column'}}> 
                    <View style={{flex: 1}}> 
                        <View style={{flex: 1/2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily, fontSize: 18, textAlign: 'left', color: 'red'}}>{title}</Text>
                            <Text style={{fontFamily, fontSize: 17, textAlign: 'left'}}>{prayer}</Text>
                        </View>    
                        <View style={{flex: 1/2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 3}}>
                                <TouchableOpacity style={{width: 40, height: 40, borderWidth: 1, borderRadius: 40/2, margin: 5, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={icons.prayIcon} style={{width: 30, height: 30}}/>
                                </TouchableOpacity>
                                <Text style={{fontFamily}}>40</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 3}}>
                                <TouchableOpacity style={{width: 40, height: 40, borderWidth: 1, borderRadius: 40/2, margin: 5, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={icons.heartIcon} style={{width: 25, height: 25}}/>
                                </TouchableOpacity>
                                <Text style={{fontFamily}}>40</Text>
                            </View>
                        </View> 
                    </View>
                </View>
                <View style={{flex: 1/2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={images.prayerBG} style={{width: 200, height: 200}} resizeMode='contain'/>
                </View>
            </>
            : 
            <>
                <View style={{flex: 1/2, justifyContent: 'center', flexDirection: 'column'}}> 
                    <View style={{flex: 1}}> 
                        <View style={{flex: 1/2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily, fontSize: 15, textAlign: 'left', color: 'red'}}>{title}</Text>
                            <Text style={{fontFamily, fontSize: 17, textAlign: 'left'}}>{description}</Text>
                        </View>    
                        <View style={{flex: 1/2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={async()=> {
                                router.push({pathname: "/audio", params: {title, audioUrl}})
                                await AsyncStorage.setItem('currentAudio', JSON.stringify({title, audioUrl}))
                                }} style={{width: 139, height: 40, backgroundColor: '#253334', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                                <Text style={{fontFamily, color: '#FFF'}}>Listen</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
                <View style={{flex: 1/2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={images.prayerBG} style={{width: 200, height: 200}} resizeMode='contain'/>
                </View>
            </>
        }
    </View>
  )
}

export default PrayerCards

const styles = StyleSheet.create({})