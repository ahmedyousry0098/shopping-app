import React, {useContext} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ProductContext from '../context/productContext';
import COLORS from "../constants/colors";
import ROUTES from "../constants/routes";
import { Feather } from '@expo/vector-icons';
import CartCounter from './CartCounter';

const {width, height} = Dimensions.get("screen");

const ProductItems = ({products, count=null, showBuyBtn=false, showDeleteBtn=false, showCounter=false}) => {

    const navigation = useNavigation();
    const {removeProduct, changeProductCount} = useContext(ProductContext);

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
                            <Text style={{fontSize: 13, fontWeight: "bold"}}>{product.title}</Text>
                            <Text style={{color: "rgb(140, 140, 140)"}}>{product.category}</Text>
                            <Text style={{fontWeight: "bold"}}>{`$${product.price}`}</Text>
                        </View>
                        <View style={styles.flexableBtns}>
                            <Text style={styles.productRating}>{`⭐ ${product.rating?.rate}`}</Text>
                            { 
                                showBuyBtn ? <TouchableOpacity 
                                    activeOpacity={0.5} 
                                    onPress={() => (
                                        navigation.navigate(ROUTES.PRODUCT_DETAILS, {"id": product.id})
                                    )}>
                                    <View style={styles.buyBtn}>
                                        <Text style={{color: COLORS.WHITE}}>Buy Now</Text>
                                    </View>
                                </TouchableOpacity> : null 
                            }
                            {
                                showDeleteBtn ? <TouchableOpacity
                                    onPress={() => removeProduct(product.id)}
                                    style={styles.deleteBtn}
                                >
                                    <View>
                                        <Feather name="x" style={{fontSize: 16}} />
                                    </View>
                                </TouchableOpacity> : null
                            }
                            {
                                showCounter ? <CartCounter 
                                    count={product.product_count}
                                    increaseProductCount={() => changeProductCount(product.id, product.product_count + 1)}
                                    decreaseProductCount={() => changeProductCount(product.id, product.product_count - 1)}
                                /> : null
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
        height: 0.18 * height,
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
    infoContainer: {flex: 1, justifyContent: "space-around",marginRight:15},
    flexableBtns: {justifyContent: "center"},
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
    buyBtn: {
        backgroundColor: COLORS.ORANGE,
        padding: 8,
        borderRadius: 10
    },
    deleteBtn: {
        position: "absolute", 
        top: 0, 
        right: 0, 
        borderWidth: 1,
        borderRadius: 20, 
        borderColor: COLORS.ORANGE,
        backgroundColor: COLORS.WHITE, 
        padding: 1
    },
});
