import React, {useReducer} from "react"

const Context = React.createContext();

const reducer = (state, action) => {

    switch(action.type) {
        case "log_in": 
            return {...state, isLoggedIn: true};
        case "log_out": 
            return {...state, isLoggedIn: false}
    }
}

export const AuthonticationProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {isLoggedIn: false});

    const logIn = (email, password) => {
        dispatch({type: "log_in", payload: {email, password}})
    };

    const logOut = () => {
        dispatch({type: "log_out"})
    }

    return <Context.Provider value={{state, logIn, logOut}}>
        {children}
    </Context.Provider>
}

export default Context;