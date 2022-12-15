import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetails } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator"
import ROUTES from '../constants/routes';
import COLORS from "../constants/colors"

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName={ROUTES.APP} screenOptions={{
        headerStyle: {
            backgroundColor: COLORS.ORANGE,
        },
        headerTintColor: COLORS.WHITE,
        headerTitleAlign: "center",
        headerBackTitle: "Back"
    }}>
        <Stack.Screen name={ROUTES.APP} component={BottomTabNavigator} options={{headerShown: false}} />
        <Stack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetails} option={{headerShown: true,}}/>
    </Stack.Navigator>
);

export default StackNavigator;