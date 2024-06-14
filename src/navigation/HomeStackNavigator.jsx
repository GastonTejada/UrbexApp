import { StyleSheet } from "react-native"
import React from "react"
import Home from "../screens/Home"
// import ItemListCategory from "../screens/ItemListCategory"
// import ItemDetail from "../screens/ItemDetail"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Init"
            screenOptions={{
                headerShown: false,                
            }}
        >
            <Stack.Screen component={Home} name="Init" />
            {/* <Stack.Screen
                component={ItemListCategory}
                name="ItemListCategory"
            />
            <Stack.Screen
                component={ItemDetail}
                name="ItemDetail" /> */}
        </Stack.Navigator>
    )
}


export default HomeStackNavigator

const styles = StyleSheet.create({})