import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Home, Categories, Product, Cart, Profile} from "../screens";
import ROUTES from "../constants/routes";
import COLORS from '../constants/colors'
import { AntDesign } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {

    const navigation = useNavigation();

    return <BottomTabs.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
            let iconName;
            let activeSize = 26;
            let inActiveSize = 17

            switch (route.name) {
                case ROUTES.HOME:
                    iconName = "home";
                    size = focused ? activeSize : inActiveSize;
                    break;
                case ROUTES.CATEGORIES:
                    iconName = "appstore-o";
                    size = focused ? activeSize : inActiveSize;
                    break;
                case ROUTES.PRODUCT:
                    iconName = "select1"
                    size = focused ? activeSize : inActiveSize;
                    break;
                case ROUTES.CART:
                    iconName = "shoppingcart"
                    size = focused ? activeSize : inActiveSize;
                    break;
                case ROUTES.PROFILE:
                    iconName = "user"
                    size = focused ? activeSize : inActiveSize;
                    break;
            }
            
            return <AntDesign name={iconName} size={size} color={COLORS.ORANGE} />
        },
        tabBarLabelStyle: {
            color: COLORS.ORANGE,
            fontWeight: "bold"
        },
        headerStyle: {
            backgroundColor: COLORS.ORANGE,
        },
        headerTintColor: COLORS.WHITE,
        headerTitleAlign: "center"
    })}>
        <BottomTabs.Screen name={ROUTES.HOME} component={Home} />
        <BottomTabs.Screen name={ROUTES.CATEGORIES} component={Categories} options={{
            headerLeft: () => {
                return <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.navigate(ROUTES.HOME)}>
                    <AntDesign name="arrowleft" size={30} color="white" />
                </TouchableOpacity>
            }
        }}
        />
        <BottomTabs.Screen name={ROUTES.PRODUCT} component={Product} options={{
            headerLeft: () => {
                return <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.navigate(ROUTES.HOME)}>
                    <AntDesign name="arrowleft" size={30} color="white" />
                </TouchableOpacity>
            }
        }} />
        <BottomTabs.Screen name={ROUTES.CART} component={Cart} />
        <BottomTabs.Screen name={ROUTES.PROFILE} component={Profile} options={{headerShown: false}} />
    </BottomTabs.Navigator>
};

export default BottomTabNavigator;