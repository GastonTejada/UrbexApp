import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, ImageBackground } from 'react-native';
import { colors } from '../constants/colors';

const Loader = () => {
  return (        
      <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color='#520120' />
          <Text style={styles.textLoader}>Loading...</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },
  textLoader:{
    color: colors.white,
    fontSize: 18,
  },
});

export default Loader;