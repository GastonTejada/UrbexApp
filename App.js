import { StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import { colors } from "./src/constants/colors"
import Navigator from "./src/navigation/Navigator"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Provider store={store}> */}
        <Navigator/>
      {/* </Provider>         */}
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,    
    backgroundColor: colors.white,
  },
});
