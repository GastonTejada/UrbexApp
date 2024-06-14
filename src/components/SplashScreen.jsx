import { StyleSheet, Image, View, Animated, Text } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

const SplashScreen  = () => {

  const imageOpacity = useRef(new Animated.Value(0)).current;

  Animated.timing(imageOpacity, {
    toValue: 1,
    duration: 3000,
    delay: 200,
    useNativeDriver: true,
  }).start();
  
  return (
    <View  style={styles.container}>
        <Animated.Image 
            source={require('../images/urbex21.png')}
            style={{ opacity:imageOpacity }}
        />
        <Image         
        source={require('../images/a&j.png')}
        style={styles.bottomRightImage}
        />             
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
containerAnimated:{
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
logo:{
backgroundColor: '#fff',
width: '60%',    
height: '30%',
resizeMode: 'contain',
},
bottomRightImage: {
  position: 'absolute',
  bottom: 20,
  right: 15,
  width: 70,
  height: 70,
  resizeMode: 'contain',
}
})