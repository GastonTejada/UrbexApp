import { StyleSheet, Text, View } from 'react-native'
import React, { useState , useEffect} from 'react'
import SplashScreen from '../components/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import HomeStackNavigator from "./HomeStackNavigator"

const Navigator = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
        {loading ? <SplashScreen /> : <BottomTabNavigator/> }
        {/* {loading ? <SplashScreen /> : <HomeStackNavigator/> } */}
        {/* <SplashScreen /> */}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})