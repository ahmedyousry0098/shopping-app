import React, {useReducer} from "react"

const Context = React.createContext();

const reducer = (state, action) => {

    switch(action.type) {
        case "add_product":
            return {...state, products: [...state.products, ...action.payload.product]};
        case "remove_product":
            const filteredProducts = state.products.filter(p => p.id !== action.payload.id)
            return {...state, products: filteredProducts}
    }
}

export const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {products: []});

    const addProduct = (product) => {
        dispatch({type: "add_product", payload: {product}})
    }

    const removeProduct = (id) => {
        console.log(id)
        dispatch({type: "remove_product", payload: id})
    }

    return <Context.Provider value={{state, addProduct, removeProduct}}>
        {children}
    </Context.Provider>
}

export default Context;