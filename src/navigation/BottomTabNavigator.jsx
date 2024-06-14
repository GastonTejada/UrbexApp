import React from "react"
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Header from "../components/Header"
import HomeStack from "./HomeStackNavigator"
import ComunityStack from "./ComunityStackNavigation"
import OrderStack from "./OrderStackNavigator"
import MyProfileStack from "./MyProfileStackNavigator"
import { colors } from "../constants/colors"
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5,FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // header: () => {
                //     return <Header route={route} />
                // },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false , 
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>                                
                                <SimpleLineIcons name="home" size={24} color={focused ? colors.white : "gray" } />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
                
            />
            <Tab.Screen
                name="Comunity"
                component={ComunityStack}
                options={{
                    headerShown: false , 
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome6 name="people-group" size={24} color={ focused ? colors.white : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="Orders"
                component={OrderStack}
                options={{
                    headerShown: false , 
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>                                
                                <MaterialCommunityIcons name="sticker-text" size={24} color={ focused ? colors.white : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}                                
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="My profile"
                component={MyProfileStack}
                options={{
                    headerShown: false , 
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>                                
                                <FontAwesome5 name="user-astronaut" size={24} color={ focused ? colors.white : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />        
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#520120',
        shadowColor: "black",
        elevation: 4,        
        height: 50,        
    },
    tabBarIndicator: {
        position: 'absolute',
        bottom: -10,
        width: '30%',
        height: 3,
        backgroundColor: colors.white,
    },

})

