import React, { FC, useState } from "react";
import { TodoItem, Status } from "../types";

type AddInputProps = {
  addTodo: (newTodo: TodoItem) => void;
};

const AddInput: FC<AddInputProps> = ({ addTodo }) => {
  const [name, setName] = useState("");

  const handleClick = () => {
    if (name.trim()) {
      addTodo({
        id: Date.now(),
        name,
        status: Status.Pending,
      });
      setName("");
    }
  };
  return (
    <div className="add-todo">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="add todo"
      />
      <button onClick={() => handleClick()}>ADD</button>
    </div>
  );
};

export default AddInput;
