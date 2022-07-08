import React, { createContext, useContext, useReducer } from "react";




export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(                  //from here
<StateContext.Provider value = {useReducer(reducer, initialState)}>    
        {children}
    </StateContext.Provider>                        //to here this piece of code allows us to setup our data layer
);


//this line helps us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);