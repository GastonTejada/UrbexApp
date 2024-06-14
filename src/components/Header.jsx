import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { FontAwesome6 } from '@expo/vector-icons';
// import DrawerNavigator from "../navigation/DrawerNavigation"
// import { useSelector } from 'react-redux'
// import Avatar from './Avatar'

const Header = ({route}) => {
  
//   const categorySelected = useSelector(state => state.shop.value.categorySelected)
  
  return (
    <View style = {styles.container}> 
      <Image
          source={require('../images/urbe22.png')}
          style={styles.logo}
      />      
      <Text style = {styles.text}>Comunidades</Text>
      {/* <FontAwesome6 name="building-user" size={20} color="white" /> */}
      {/* <Text style = {styles.text}>{route.name}</Text>   */}
      {/* <Avatar/> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: '100%',
    height: 45,
    backgroundColor: '#520120',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,    
  },
  logo:{
    width: 100,
    height: 20,
    marginLeft: 8,    
    justifyContent: 'center',
    color: '#fff',  
  },
  text: {    
    color: colors.white,
    fontSize: 15,    
    marginLeft: 5,
    fontWeight: 'bold',
    color:  colors.white // '#737373'
  }
})