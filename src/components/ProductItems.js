import React, {useContext} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ProductContext from '../context/productContext';
import COLORS from "../constants/colors";
import ROUTES from "../constants/routes";
import { Feather } from '@expo/vector-icons';

const {width, height} = Dimensions.get("screen");

const ProductItems = ({products, showBuyBtn, showDeleteBtn=false}) => {

    const navigation = useNavigation();
    const {removeProduct} = useContext(ProductContext);

    return (
        <View style={styles.container}>
            <ScrollView>
            {
                products?.map((product) => {
                    return <View key={product.id} style={[styles.productContainer]}>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={{uri: product.image}}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={{fontSize: 14, fontWeight: "bold"}}>{product.title}</Text>
                            <Text style={{color: "rgb(140, 140, 140)"}}>{product.category}</Text>
                            <Text style={{fontWeight: "bold"}}>{`$${product.price}`}</Text>
                        </View>
                        <View style={styles.buyProductContainer}>
                            <Text style={styles.productRating}>{`⭐ ${product.rating?.rate}`}</Text>
                            { 
                                showBuyBtn ? <TouchableOpacity activeOpacity={0.5} onPress={() => (
                                    navigation.navigate(ROUTES.PRODUCT_DETAILS, {"id": product.id})
                                )}>
                                    <View style={styles.buttonContainer}>
                                        <Text style={{color: COLORS.WHITE}}>Buy Now</Text>
                                    </View>
                                </TouchableOpacity> : null 
                            }
                            {
                                showDeleteBtn ? <TouchableOpacity
                                    onPress={() => removeProduct(product.id)}
                                    style={{position: "absolute", top: -5, right: -5, borderRadius: 20, backgroundColor: COLORS.OFF_WHITE.FIRST, padding: 5}}
                                >
                                    <View>
                                        <Feather name="x" style={{fontSize: 17}} />
                                    </View>
                                </TouchableOpacity> : null
                            }
                        </View>
                        
                    </View>
                })
            }
            </ScrollView>
        </View>
  )
}

export default ProductItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productContainer: {
        width: 0.9 * width,
        height: 0.14 * height,
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: COLORS.WHITE,
        margin: 10,
        padding: 5,
        borderRadius: 15
    },
    imageContainer: {
        height: "90%",
        width: "25%",
        marginHorizontal: 8,
        borderRadius: 15,
        justifyContent: "flex-end"
    }, 
    image: {
        width: "100%",
        height: "100%"
    },
    infoContainer: {flex: 1, justifyContent: "space-around"},
    buyProductContainer: {justifyContent: "center"},
    buyButtonContainer: {backgroundColor: COLORS.ORANGE},
    productRating: {
        fontWeight: "bold", 
        fontSize: 14, 
        position: "absolute", 
        bottom: 3,
        right: 5,
        padding: 3,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: COLORS.ORANGE,
        padding: 8,
        borderRadius: 10
    },
})