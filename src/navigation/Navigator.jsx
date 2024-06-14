import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState , useEffect} from 'react'
import SplashScreen from '../components/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import HomeStackNavigator from "./HomeStackNavigator"
import DrawerNavigator from "./DrawerNavigation"

const Navigator = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
        {/* <DrawerNavigator/> */}
        {/* {loading ? <SplashScreen /> : <BottomTabNavigator/> } */}
        {loading ? <SplashScreen /> : <DrawerNavigator/> }
        {/* {loading ? <SplashScreen /> : <HomeStackNavigator/> } */}
        {/* <SplashScreen /> */}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})