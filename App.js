import "react-native-gesture-handler";
import { StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import Navigator from "./src/navigation/Navigator"
import { Provider } from "react-redux"
import store  from "./src/store/index"
import { colors } from "./src/constants/colors"
import { useFonts } from "expo-font"

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Josefin : require("./assets/Fonts/JosefinSans-Regular.ttf"),
    Lobster : require("./assets/Fonts/LobsterTwo-Regular.ttf"),
    PlayFair: require("./assets/Fonts/Playfair_9pt-Regular.ttf"),
    LoraBold: require("./assets/Fonts/Lora-Bold.ttf"),
  })
  
  if (!fontsLoaded || fontError) {
    return null
  }

  if (fontsLoaded && !fontError) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#520120'/>      
        <Provider store={store}>
          <Navigator/>
        </Provider>        
      </SafeAreaView>    
    );
  }  
}

const styles = StyleSheet.create({
  containerAux: {
    flex: 0,
    backgroundColor:'#520120',          
    height: Platform.OS === "android" ? StatusBar.currentHeight : 20
  },
  container: {
    flex: 1,    
    backgroundColor: colors.white,
  },
});
