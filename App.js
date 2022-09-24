import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import Text from './components/text/text';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux';
import { colors } from './theme';
import FlashMessage from 'react-native-flash-message';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


let persistor = persistStore(store)


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
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider style={GlobalStyles.droidSafeArea}>
            <Navigation />
            <StatusBar
              animated={true}
              backgroundColor={colors.black}
              style="light"
            />
            <FlashMessage
              position="top"
              floating
              statusBarHeight={40}
            />
          </SafeAreaProvider>
        </PersistGate >
      </Provider>

    )
  }

}

