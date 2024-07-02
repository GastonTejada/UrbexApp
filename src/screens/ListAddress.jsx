import { StyleSheet, Text, View, ImageBackground } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import AddButton from "../components/AddButton"
import { useGetLocationQuery } from "../services/shopService"
import AddressItem from "../components/AddressItem"

const ListAddress = ({ navigation }) => {
    const { localId } = useSelector((state) => state.auth.value)

    const { data: location, isLoading, error } = useGetLocationQuery(localId)

    return location ? (           
        <AddressItem
            location={location}
            navigation={navigation}
        />
    ) : (
        <View style={styles.container}>
            <Text style={styles.text}>No hay ubicación establecida</Text>
            <AddButton
                title="Seleccionar localización"
                onPress={() => navigation.navigate("Location Selector")}
            />

        </View>
    )
    
}

export default ListAddress

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        paddingVertical: 20,
        fontFamily: "Josefin",
        fontSize: 18,
    },
})
