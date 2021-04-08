import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment, useState } from "react";
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

type TodosList = ITodo[];

function Todo(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<TodosList>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: TodosList = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: TodosList = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: TodosList = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
        <section>
          {todos.map((todo: ITodo, index: number) => (
            <Fragment key={index}>
              <div>{todo.text}</div>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "set incomplete" : "set complete"}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                remove item
              </button>
            </Fragment>
          ))}
        </section>
      </form>
    </Fragment>
  );
}

export default Todo;
