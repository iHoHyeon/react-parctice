import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./App.css";

import Template from "./components/Template";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

let nextId = 4;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: "할일 1", checked: true },
    { id: 2, text: "할일 2", checked: false },
    { id: 3, text: "할일 3", checked: true },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
    if (insertToggle) setSelectedTodo(null);
  };

  const onInsertTodo = (text) => {
    if (text == "") return alert("할일을 입력해주세요");
    else {
      const todo = {
        id: nextId,
        text: text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onRewrite = (text, id) => {
    onInsertToggle();
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)));
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo} />
      <div className="add-todo-Button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle ? <TodoInsert selectedTodo={selectedTodo} onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} onRemove={onRemove} onRewrite={onRewrite} /> : ""}
    </Template>
  );
}

export default App;
