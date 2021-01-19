import { createContext, useReducer } from 'react';

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  user: null,
};

// Create context
const Context = createContext({});

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{ children }</Context.Provider>
};

export { Context, Provider }
