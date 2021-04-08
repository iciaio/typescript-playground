import React from "react";
import StoreProvider from "../src/context/storeProvider";
import TodoList from "../src/todoList";
import {
  AddNumbers,
  AddStrings,
  AddBooleans,
  AddStringArrays,
} from "../src/Extend";
import { HeaderWrapper } from "./Wrapper";
import SetAddends from "./SetAddends";

export default function App(): JSX.Element {
  return (
    <HeaderWrapper name="Alicia">
      <StoreProvider>
        <TodoList />
      </StoreProvider>
      <AddNumbers firstAddend={8} secondAddend={12} />
      <AddStrings firstAddend={"whatzzzup "} secondAddend={"hot mamacita?!"} />
      <AddBooleans firstAddend={true} secondAddend={false} />
      <AddStringArrays
        firstAddend={["a", "b", "c"]}
        secondAddend={["d", "e", "f"]}
      />
      <SetAddends />
    </HeaderWrapper>
  );
}
