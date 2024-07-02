import { StyleSheet, Image, View, Animated, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { colors } from '../constants/colors';

const SplashScreen = () => {
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const imageTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 3000,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(imageTranslateY, {
        toValue: -120,
        duration: 3000,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require('../images/urbex21.png')}
        style={{
          opacity: imageOpacity,
          transform: [{ translateY: imageTranslateY }]
        }}
      />
      <Image 
        source={require('../images/ayj.png')}
        style={styles.bottomRightImage}
      />             
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF0000" />
        <Text style={styles.textLoader}>Obteniendo servicios...</Text>
      </View>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAnimated: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
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
  },
  loaderContainer: {
    marginTop: 40,
  },
  textLoader: {
    color: colors.dark,
    fontSize: 18,
  },
});
