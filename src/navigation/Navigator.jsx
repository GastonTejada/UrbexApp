import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState , useEffect} from 'react'
import SplashScreen from '../components/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import DrawerNavigator from "./DrawerNavigation"
import { useSelector, useDispatch } from 'react-redux'

const Navigator = () => {

  const [loading, setLoading] = useState(true);
  const {user} = useSelector(state => state.auth.value)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
        {/* <AuthStackNavigator/> */}
        {loading ? <SplashScreen /> : user ? <DrawerNavigator/> : <AuthStackNavigator/> }
        {/* {loading ? <SplashScreen /> : <DrawerNavigator/> }         */}
        {/* <SplashScreen /> */}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})