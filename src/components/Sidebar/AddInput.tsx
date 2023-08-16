import React, { ChangeEvent, FC, useState } from "react";
import { AddInputProps, Status } from "../../types";
import { nanoid } from "nanoid";

const AddInput: FC<AddInputProps> = ({ addTodo }) => {
  const [name, setName] = useState("");

  const onAddTodo = () => {
    if (name.trim()) {
      addTodo({
        id: nanoid(),
        name,
        status: Status.Pending,
      });
      setName("");
    }
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="add-todo">
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        placeholder="add todo"
      />
      <button onClick={() => onAddTodo()}>ADD</button>
    </div>
  );
};

export default AddInput;
