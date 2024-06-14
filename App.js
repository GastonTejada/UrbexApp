import "react-native-gesture-handler";
import { StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import { colors } from "./src/constants/colors"
import Navigator from "./src/navigation/Navigator"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#520120'/>      
      {/* <Provider store={store}> */}
        <Navigator/>
      {/* </Provider>         */}
    </SafeAreaView>    
  );
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
