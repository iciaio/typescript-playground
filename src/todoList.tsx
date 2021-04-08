import React, { useState } from "react";
import { useStore } from "../src/context/storeProvider";

export default function TodoList(props: any): JSX.Element {
  const store = useStore();

  const [value, setValue] = useState("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const todo = {
      id: Math.random() * 100,
      title: value,
      status: false,
    };
    store?.dispatch({ type: "ADD_TODO", payload: todo });
    setValue("");
  };

  const removeTodos = (id: number): void => {
    store?.dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit">+ Add</button>
      {store?.state.map((todo) => {
        return (
          <div>
            <p>{todo.title}</p>
            <button type="button" onClick={() => removeTodos(todo.id)}>
              remove
            </button>
          </div>
        );
      })}
    </form>
  );
}
