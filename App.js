import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import Text from './components/text/text';
import { colors } from './theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux';






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
      <Provider store={store}>
        <SafeAreaProvider style={GlobalStyles.droidSafeArea} >
          <Navigation />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </Provider>

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
