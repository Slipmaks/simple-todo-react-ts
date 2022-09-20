import React, { useRef } from "react";
import "./NewTodo.css";

interface newTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<newTodoProps> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInput.current!.value;

    props.onAddTodo(enteredText);
    textInput.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={textInput} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
