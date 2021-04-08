import React, { useReducer } from "react";
import { EnumType } from "typescript";
interface IState {
  onesCount: number;
  tensCount: number;
}

interface IAction {
  type: string;
  payload?: any;
}

export default function Counter() {
  const initialState = { onesCount: 0, tensCount: 0 };

  const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
      case "INCREMENT_ONES_COUNT":
        return { ...state, onesCount: state.onesCount + 1 };
      case "DECREMENT_ONES_COUNT":
        return { ...state, onesCount: state.onesCount - 1 };
      case "INCREMENT_TENS_COUNT":
        return { ...state, tensCount: state.tensCount + 10 };
      case "DECREMENT_TENS_COUNT":
        return { ...state, tensCount: state.tensCount - 10 };
    }
    return { ...state };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT_ONES_COUNT" })}
      >
        -
      </button>
      <p>{state.onesCount}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT_ONES_COUNT" })}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT_TENS_COUNT" })}
      >
        -
      </button>
      <p>{state.tensCount}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT_TENS_COUNT" })}
      >
        +
      </button>
    </div>
  );
}
