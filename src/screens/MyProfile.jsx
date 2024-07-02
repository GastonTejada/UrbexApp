import { Image, StyleSheet, View, Platform, Text } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { clearUser } from "../features/User/userSlice"
import { truncateSessionsTable } from "../persistence"

const MyProfile = ({navigation}) => {
    
    const dispatch = useDispatch()

    const {imageCamera, localId, user} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)
    
    const launchCamera = async () => {
        navigation.navigate('Image selector')
    };

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    const signOut = async () => {
        try {
            if (Platform.OS !== 'web') 
                {   await truncateSessionsTable()
                    dispatch(clearUser())
                }
        } catch (error) {
            Alert.alert('Error','Hubo un error con la autenticación. Verifique sus credenciales e intente nuevamente.');            
        }
    }

    return (
        <View style={styles.container}>
            
            {imageFromBase || imageCamera  ? (                                
                <View style={styles.containerUser}>
                    <Image
                        source={{uri: imageFromBase?.image || imageCamera}}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            ) : (
                <View style={styles.containerUser}>
                    <Image
                        source={require('../images/defaultProfile.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />                    
                </View>
            )}
                
            <Text style={styles.textUser}> {user ? `User: ${user}` : "User: Sin seleccionar"}</Text>      
        
            <AddButton
                    onPress={launchCamera}
                    title={
                        imageFromBase || imageCamera
                            ? "Modificar foto de perfil"
                            : "Agregar foto de perfil"
                    }
                />
            <AddButton onPress={launchLocation} title="Mi dirección" />
            <AddButton onPress={signOut} title="Cerrar sesión" />

        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        // flex: 1,        
        height: '50%',
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    containerUser:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    textUser:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Josefin',
        marginTop: 20

    }
});
