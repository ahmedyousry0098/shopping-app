import { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import { AuthonticationProvider } from "./src/context/authContext";
import { ProductProvider } from "./src/context/productContext";
import {QueryClient, QueryClientProvider} from "react-query";
import AuthonticationContext from "./src/context/authContext"
import AuthStackFlow from "./src/navigation/AuthStackFlow";
import StackNavigator from "./src/navigation/StackNavigator";
import { Splash } from "./src/screens";

const queryClient = new QueryClient();

const App = () => {

  const [splash, setSplash] = useState(true)
  const {state: {isLoggedIn}} = useContext(AuthonticationContext);
  LogBox.ignoreLogs(['Sending']);

  if (splash) {
    return <Splash setSplash={() => setSplash(false)}/>
  }

  return <NavigationContainer>
    {isLoggedIn ? <StackNavigator /> : <AuthStackFlow />}
  </NavigationContainer>
}

export default () => (
  <AuthonticationProvider>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </QueryClientProvider>
  </AuthonticationProvider>
);
[]