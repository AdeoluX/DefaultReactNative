import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StatusBox = ({name, image, fontFamily}) => {
  return (
    <View style={{height: 85, width: 70, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' , marginTop: 3}}>
        <View style={{height: 65, width: 65, borderWidth: 2, borderRadius: 65/2, borderColor: '#FFF', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={image} style={{width: 55, height: 55, borderRadius: 55/2}} resizeMode="cover"/>
        </View>
        <Text style={{fontFamily, fontSize: 12, color: '#fff'}}>{name}</Text>
    </View>
  )
}

export default StatusBox

const styles = StyleSheet.create({})