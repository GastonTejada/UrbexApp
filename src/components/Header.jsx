import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
// import { useSelector } from 'react-redux'
// import Avatar from './Avatar'


const Header = ({route},{title}) => {
  
//   const categorySelected = useSelector(state => state.shop.value.categorySelected)
  
  return (
    <View style = {styles.container}>
      <Image
          source={require('../images/urbex2.png')}
          style={styles.logo}
      />      
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
    height: 40,
    backgroundColor: colors.darkbrown,    
    alignItems: 'center',
    borderBottomColor: colors.chocolate,
    borderBottomWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  logo:{
    width: 100,
    height: 20,
    marginLeft: 15,    
    justifyContent: 'center',
    color: '#fff',
    backgroundImage: 'linear-gradient(to right, #fff, #f8f8f8)',
  },
  text: {    
    color: colors.white,
    fontSize: 30,    
  }
})