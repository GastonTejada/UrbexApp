import { Pressable, StyleSheet, Text, View, Platform, Alert, Image } from "react-native"
import React, { useState, useEffect } from "react"
import { colors } from "../constants/colors"
import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"
import { useSignInMutation } from "../services/authService"
import { setUser } from "../features/User/userSlice"
import { useDispatch } from "react-redux"
import { insertSession } from "../persistence"

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState()
    
    const [password, setPassword] = useState()

    const dispatch = useDispatch()

    const [triggerSignIn, result] = useSignInMutation()    

    useEffect(() => {
        if (result?.data && result.isSuccess) {
        (async ()=> {
            try {
                if (Platform.OS !== 'web') {
                    const response = await insertSession({
                        email: result.data.email,
                        localId: result.data.localId,
                        token: result.data.idToken,
                    })
                }
                dispatch(
                    setUser({
                        email: result.data.email,
                        idToken: result.data.idToken,
                        localId: result.data.localId,
                    })
                )
            } catch (error) {
                Alert.alert('Error','There was a connection error with the DB, try again later');
            }
        })()
        }
    }, [result])
    
    const onSubmit = () => {
        
       triggerSignIn({ email, password })        
    }
    return (
        <View style={styles.main}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../images/urbe22.png')}
                    style={styles.logo}
                />
                <Text style={styles.headerTitle}>Comunidades</Text>
            </View>     
            <View style={styles.container}>
                                        
                <Text style={styles.title}>Inicia sesión</Text>
                <InputForm
                    label={"email"}
                    onChange={setEmail}
                    error={""}         
                />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Enviar" />
                <Text style={styles.sub}>No tengo cuenta</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>        
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",        
        backgroundColor: colors.white,        
    },
    logoContainer: {    
      alignItems: 'center',
      top: -80  
    },
    logo: {
      width: 200,
      height: 40,      
    },
    headerTitle: {
      color: colors.black,
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
        // borderColor: colors.board,
        // borderWidth : 3,       
    },
    title: {
        fontSize: 22,
        fontFamily: "Josefin",
        color: colors.black,
    },
    sub: {
        fontSize: 16,
        color: colors.black,
    },
    subLink: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.red,
    },
})
