import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import Text from './components/text/text';
import { colors } from './theme';






export default function App() {


  const [loaded] = useFonts({
    "Manrope-Bold": require('./assets/fonts/Manrope-Bold.ttf'),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Spartan-Regular": require('./assets/fonts/Spartan-Regular.ttf')
  })

  if (!loaded) {
    return (
      <Text>Font is Loading.........</Text>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text preset="h1" style={{ color: colors.secondary }}>Welcome</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
