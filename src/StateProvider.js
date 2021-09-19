import React, { createContext, useContext, useReducer } from "react";
// setup data layer
// We need this to track the basket

// This creates an empty data layer
// This is the DATA LAYER
export const StateContext = createContext();

// Create a Provider to WRAP the entire app inside of the Provider
// AND give it access to this data layer

// Build A Provider
// initialState = how the data looks in the beginning
export const StateProvider = ({ reducer, initialState, children }) => (
  // useReducer hook inside, use a data layer, place to store information
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
  // Children refers to the APP
);

// This is how we use it inside of a component
// This allows us to use the data layer
export const useStateValue = () => useContext(StateContext);
