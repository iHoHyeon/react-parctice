import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiPencil, TiTrash } from "react-icons/ti";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onRewrite }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) setValue(selectedTodo.text);
  }, [selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={selectedTodo ? () => onRewrite(value, selectedTodo.id) : onSubmit}>
        <input placeholder="입력해주세요" value={value} onChange={onChange}></input>
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil onClick={() => onRewrite(value, selectedTodo.id)} />
            <TiTrash onClick={() => onRemove(selectedTodo.id)} />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
