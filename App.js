import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import Text from './components/text/text';
import { colors } from './theme';






export default function App() {


  const [loaded] = useFonts({
    "Manrope-Bold": require('./assets/fonts/Manrope-Bold.ttf'),
    "Manrope-ExtraBold": require('./assets/fonts/Manrope-ExtraBold.ttf'),
    "Manrope-ExtraLight": require('./assets/fonts/Manrope-ExtraLight.ttf'),
    "Manrope-Light": require("./assets/fonts/Manrope-Light.ttf"),
    "Manrope-Medium": require('./assets/fonts/Manrope-Medium.ttf'),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require('./assets/fonts/Manrope-SemiBold.ttf'),
    "SpaceMono-Regular": require('./assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) {
    return (
      <Text>Font is Loading.........</Text>
    )
  }
  return (
    <View style={styles.container}>
      <Text preset="h1" style={{ color: colors.lightOrange }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
