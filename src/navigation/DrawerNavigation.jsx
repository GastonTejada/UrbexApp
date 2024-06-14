// import React from "react";
// import { createDrawerNavigator  } from "@react-navigation/drawer";
// import BottomTabNavigator from "./BottomTabNavigator";
// import MyProfile from "../screens/MyProfile";
// import SettingProfile from "../screens/SettingProfile";
// import CustomDrawerContent from '../components/CustomDrawerContent'
// import Avatar from '../components/Avatar'
// import { colors } from '../constants/colors'
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Drawer = createDrawerNavigator()

// const DrawerNavigation = () => {
//     return (
//         <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
//         screenOptions={{
//             headerStyle: {
//               backgroundColor: colors.board,            
//             },
//             headerTitle: () => (
//               <View style={styles.headerTitleContainer}>
//                     <Image
//                     source={require('../images/urbe22.png')}
//                     style={styles.logo}
//                     />
//                     <Text style={styles.headerTitle}>Comunidades</Text>                    
//               </View>
//             ),
//             headerLeft: () => (
//                 <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.drawerIconContainer}>
//                   <Icon name="menu" size={30} color={colors.white} />
//                 </TouchableOpacity>
//               ),
//             headerRight: () => (
//                 <Avatar style={styles.avatar} />   
//             ),              
//             headerTitleAlign: 'center',
//           }}
//           >
//             <Drawer.Screen name="Init"          component={BottomTabNavigator} />            
//             <Drawer.Screen name="Perfil"        component={ MyProfile } />
//             <Drawer.Screen name="Configuracion" component={ SettingProfile } />    
//         </Drawer.Navigator>    
//         )
//     }


// export default DrawerNavigation

// const styles = StyleSheet.create({
//     headerTitleContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',     
//       justifyContent: 'space-between',
//       paddingHorizontal: 10,
//     },
//     logo: {
//       width: 100,
//       height: 20,
//       marginRight: 5,
//     },
//     headerTitle: {
//       color: colors.white,
//       fontSize: 16,        
//       fontWeight: 'bold',
//     },
//     drawerIconContainer: {
//         marginLeft: 10,
//       },
//     avatar: {
//         marginLeft: -30,
//       },
//   });

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import BottomTabNavigator from "./BottomTabNavigator";
import MyProfile from "../screens/MyProfile";
import SettingProfile from "../screens/SettingProfile";
import CustomDrawerContent from '../components/CustomDrawerContent';
import Avatar from '../components/Avatar';
import { colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa el icono de la librería

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.board,
        },
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../images/urbe22.png')}
                style={styles.logo}
              />
              <Text style={styles.headerTitle}>Comunidades</Text>
            </View>            
          </View>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.drawerIconContainer}>
            <Icon name="menu" size={30} color={colors.white} />
          </TouchableOpacity>
        ),
         headerRight: () => (
            <Avatar style={styles.avatar} />   
            ),   
        headerTitleAlign: 'center',
      })}
    >
      <Drawer.Screen name="Init"          component={BottomTabNavigator} />
      <Drawer.Screen name="Perfil"        component={MyProfile} />
      <Drawer.Screen name="Configuracion" component={SettingProfile} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 20,
    marginRight: 5,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerIconContainer: {
    marginLeft: 10,
  },
  avatar: {
    marginEnd: -30,
  },
});

export default DrawerNavigation;
