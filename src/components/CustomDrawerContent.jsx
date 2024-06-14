
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors } from '../constants/colors'

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/urbe22.png')} style={styles.logo} />
        <Text style={styles.title}>Comunidades</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,    
    backgroundColor: colors.board,
  },
  logo: {
    width: 100,
    height: 100,
    height: 20,
    marginLeft: 8,    
    justifyContent: 'center',
    color: '#fff',  
  },
  title: {
    color: colors.white,
    fontSize: 15,    
    marginLeft: 5,
    fontWeight: 'bold',        
  },
});


