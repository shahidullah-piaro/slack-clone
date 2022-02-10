import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({children, reducer, initaialState}) => (
    <StateContext.Provider value={useReducer(reducer, initaialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);