import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import Checkout from '../screens/checkout';
import Earphones from '../screens/earphones';
import Headphones from '../screens/headphones';
import Home from '../screens/home';
import Details from '../screens/product-details';
import Speakers from '../screens/speakers';
import { colors } from '../theme';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons"
import { useSelector } from 'react-redux';
import { selectCartLength } from '../redux/cartSlice';


const THEME = {
    ...DefaultTheme,

    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },

}


const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreens() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator >
    )
}

const HeadphonesStack = createNativeStackNavigator();
function HeadphoneStackScreen() {
    return (
        <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
            <HeadphonesStack.Screen name="Headphones" component={Headphones} />
            <HeadphonesStack.Screen name="Details" component={Details} />
        </HeadphonesStack.Navigator>
    )
}

const EarphonesStack = createNativeStackNavigator();
function EarphoneStackScreen() {
    return (
        <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
            <EarphonesStack.Screen name="Earphones" component={Earphones} />
            <EarphonesStack.Screen name="Details" component={Details} />
        </EarphonesStack.Navigator>
    )

}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
    return (
        <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
            <SpeakersStack.Screen name="Speakers" component={Speakers} />
            <SpeakersStack.Screen name="Details" component={Details} />
        </SpeakersStack.Navigator>
    )

}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="Cart" component={Cart} />
            <CartStack.Screen name="Checkout" component={Checkout} />
        </CartStack.Navigator>
    )
}

function TabBarIcon({ fontFamily, name, color }) {
    if (fontFamily === 'MaterialCommunityIcons') {
        return <MaterialCommunityIcons name={name} size={30} color={color} />
    }
    else if (fontFamily === "Ionicons") {
        return <Ionicons name={name} size={30} color={color} />
    }
    else if (fontFamily === "SimpleLineIcons") {
        return <SimpleLineIcons name={name} size={30} color={color} />
    }
}


export default function Navigation() {
    const cartLength = useSelector(selectCartLength)
    return (
        <NavigationContainer theme={THEME}  >
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false, tabBarActiveTintColor: colors.primary, tabBarStyle: { paddingBottom: 10, height: 70 },
                    tabBarLabelStyle: {
                        fontSize: 12
                    },
                }}>
                <Tab.Screen
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="home"
                                color={color}
                            />
                    }}
                    name="HomeTab"
                    component={HomeStackScreens}
                />
                <Tab.Screen
                    options={{
                        title: "Headphones",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="headphones"
                                color={color}
                            />
                    }}
                    name="HeadphonesTab"
                    component={HeadphoneStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Earphones",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"SimpleLineIcons"}
                                name="earphones-alt"
                                color={color}
                            />

                    }}
                    name="EarphonesTab"
                    component={EarphoneStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Speakers",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="speaker"
                                color={color}
                            />
                    }}
                    name="SpeakersTab"
                    component={SpeakersStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Cart",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                fontFamily={"Ionicons"}
                                name="cart-outline"
                                color={color}
                            />
                        ),
                        tabBarBadge: cartLength > 0 ? cartLength : null
                    }}
                    name="CartTab"
                    component={CartStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}