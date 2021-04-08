import React, { useState, createContext, useReducer, useContext } from "react";

const initialState: IState = [];

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      const id = action.payload;
      const newTodos = state.filter(todo => todo.id !== id)
      return newTodos;
    default:
      return state;
  }
};

const Store = createContext<ContextType|null>(null);

export const StoreProvider: React.FunctionComponent<React.PropsWithChildren<any>> = (props: React.PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    reducer,
    initialState
  );

  return (
    <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
  );
};

export const useStore = () => useContext<ContextType|null>(Store);

export default StoreProvider;
