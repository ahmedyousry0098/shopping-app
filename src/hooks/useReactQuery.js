import { Alert } from "react-native";
import {useQuery} from "react-query";

export const getProductQueries = (forHomeScreen) => {
    const fetchProducts = async () => {
        let products = await fetch("https://fakestoreapi.com/products")
        .then(result => result.json())
        .catch(err => Alert.alert(`Please Reload The page ${err}`))
        return products;
    };

    const {data: products, status} = useQuery({queryKey: ["products"], queryFn: fetchProducts});

    return {products, status}
};

export const getCategoryQueries = () => {
    const fetchCategories = async () => {
        const categories = await fetch("https://fakestoreapi.com/products/categories")
        .then(result => result.json())
        .catch(err => Alert.alert(`please Reload The page ${err}`))
        return categories;
    }
    
    const {data: categories, status} = useQuery({queryKey: ["categories"], queryFn: fetchCategories});

    return {categories, status};
};