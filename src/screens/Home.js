import React from "react";
import {View, Text, StyleSheet, Button, Dimensions, ScrollView, TouchableOpacity} from "react-native";
import { getProductQueries } from "../hooks/useReactQuery";
import LottieView from "lottie-react-native";
import ProductItems from "../components/ProductItems";
import CategoriesItems from "../components/CategoriesItems";
import SeeAllBar from "../components/SeeAllBar";
import COLORS from "../constants/colors";
import ROUTES from "../constants/routes"

const Home = ({navigation}) => {

    const {products, status} = getProductQueries();
    const topProducts = products?.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4);

    if (status === "loading") {
        return <View style={{position: "absolute", top: 150, alignSelf: "center"}}>
            <LottieView 
                speed={0.7}
                autoPlay={true}
                autoSize
                source={require("../../assets/animations/loading.json")}
            />
            <Text style={{fontSize: 20, color: COLORS.ORANGE, alignSelf: "center"}}>Loading...</Text>
        </View>
    }

    if (status === "error") {
        return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 20, color: COLORS.ORANGE}}>Something Went Wrong, Please Reload The Page ..</Text>
        </View>
    }

    return (
        <View style={styles.container}>

            <SeeAllBar 
                action={() => navigation.navigate(ROUTES.CATEGORIES)}
                title="Categories"
            />

            <CategoriesItems 
                forHomeScreen={true}
            />

            <SeeAllBar 
                action={() => navigation.navigate(ROUTES.PRODUCT)}
                title="Top Products"
            />

            <ProductItems 
                products={topProducts}
                showBuyBtn={true}
            />
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.ORANGE_BG
    },
});

export default Home;