import React from "react"
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import { colors } from "../constants/colors"
// import CartStack from "./CartStackNavigator"
// import OrderStack from "./OrderStackNavigator"
import Header from "../components/Header"
import { SimpleLineIcons } from '@expo/vector-icons';
// import MyProfileStackNavigator from "./MyProfileStackNavigator"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header route={route} />
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
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
            {/* <Tab.Screen
                name="Cart"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome5 name="shopify" size={24} color={focused ? colors.orange : "gray"} />
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
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="receipt-sharp" size={24} color={ focused ? colors.orange : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="My profile"
                component={MyProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>                                
                                <FontAwesome5 name="user-astronaut" size={24} color={ focused ? colors.orange : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />         */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.darkbrown,
        shadowColor: "black",
        elevation: 4,        
        height: 45,        
    },
    tabBarIndicator: {
        position: 'absolute',
        bottom: -10,
        width: '30%',
        height: 3,
        backgroundColor: colors.white,
    },

})
