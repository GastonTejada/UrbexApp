
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors } from '../constants/colors'
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
        <View style={styles.header}>
            <Image source={require('../images/urbe22.png')} style={styles.logoHeader} />
            <Text style={styles.title}>Comunidades</Text>
        </View>
        <DrawerItemList {...props} />
        <View style={styles.footerContainer}>

          <View style={styles.footer}>        
              <View style={styles.containerFooterText}> 
                  <View style={styles.locationContainer}> 
                      <Entypo name="location" size={18} color="white" />
                      <Text style={styles.footerText}> Pellegrini 833 PA, Rosario</Text>  
                  </View>  
                  <View style={styles.mailContainer}> 
                      <Entypo name="mail" size={18} color="white" />
                      <Text style={styles.footerText}>info@ayjsistemas.com</Text>  
                  </View>  
                  <View style={styles.telephoneContainer}> 
                      <Foundation name="telephone" size={18} color="white" />
                      <Text style={styles.footerText}>+54 341 4821242 Fax 4820996</Text>  
                  </View>  
                  <View style={styles.facebookContainer}> 
                      <Entypo name="facebook" size={18} color="white" />
                      <Text style={styles.footerText}>/Sistemas.AyJ</Text> 
                  </View>   
              </View>              
              <Image source={require('../images/a&j.png')} style={styles.logoFooter} />        
          </View>        
        </View>
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
  logoHeader: {
    width: 100,
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
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.board,
    paddingTop: 20,
    paddingBottom: 20,
    marginRight: 10, 
    flexDirection: 'row',
    marginTop: 40
  },
  containerFooterText: {
    flexDirection: 'column',
    marginLeft: 10,
    gap: 7    
  },
  footerText: {
    color: colors.white,
    justifyContent: 'flex-start',
    fontSize: 12
  },  
  logoFooter: {
    width: 65,
    height: 65,    
    marginLeft: 5,    
    justifyContent: 'center',
    color: '#fff',    
  },
  locationContainer: {
    flexDirection: 'row',
    gap: 5
  },
  mailContainer: {
    flexDirection: 'row',    
    gap: 5
  },
  telephoneContainer: {
    flexDirection: 'row',    
    gap: 5
  },
  facebookContainer: {
    flexDirection: 'row',
    gap: 5
  },
});


