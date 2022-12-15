import { createStackNavigator } from "@react-navigation/stack";
import { Splash, Register, LogIn } from '../screens';
import BottomTabNavigator from "./BottomTabNavigator";
import ROUTES from "../constants/routes";

const Stack = createStackNavigator();

const AuthStackFlow = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ROUTES.LOGIN}
        >
            <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
            <Stack.Screen name={ROUTES.LOGIN} component={LogIn} />
            <Stack.Screen name={ROUTES.REGISTER} component={Register} />
        </Stack.Navigator>
    )
};

export default AuthStackFlow;