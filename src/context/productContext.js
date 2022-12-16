import React, {useReducer} from "react"

const Context = React.createContext();

const reducer = (state, action) => {

    switch(action.type) {
        case "add_product":
            // add count prop to product object
            let productObj = action.payload.product[0]
            let modefiedProductObj = Object.assign(productObj, {product_count: 0});
            
            return {...state, products: [...state.products, modefiedProductObj]};

        case "remove_product":
            const filteredProducts = state.products.filter(p => p.id !== action.payload.id)
            return {...state, products: filteredProducts}

        case "change_product_count":
            // working on it
            // const product = state.products.find(p => p.id === action.payload.id)
            // product?.product_count = action.payload.count
            // return {...state, products: [...state.products, product]}
    }
}

export const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {products: []});

    const addProduct = (product) => {
        dispatch({type: "add_product", payload: {product}})
    }

    const removeProduct = (id) => {
        dispatch({type: "remove_product", payload: {id}})
    }

    const changeProductCount = (id, count) => {
        console.log(id,count)
        dispatch({type: "change_product_count", payload: {id, count}})
    }

    return <Context.Provider value={{state, addProduct, removeProduct, changeProductCount}}>
        {children}
    </Context.Provider>
}

export default Context;