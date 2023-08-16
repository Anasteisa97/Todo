import React, { FC, ChangeEvent, useEffect, useState } from "react";
import { TodoItemType, Status } from "../types";

type DetailProps = {
  currentTodo: TodoItemType | any;
  updateTodo: (id: string, newTodo: TodoItemType) => void;
};

const Detail: FC<DetailProps> = ({ currentTodo, updateTodo }) => {
  const [name, setName] = useState(currentTodo.name);
  const [status, setStatus] = useState(Status.Pending);

  const onSave = () => {
    if (name.trim()) {
      updateTodo(currentTodo.id, { ...currentTodo, name, status });
    }
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.options.selectedIndex);
  };
  useEffect(() => {
    setName(currentTodo.name); // обновляем имя редактируемой todo в инпуте, если было инициировано редактирование другой todo
  }, [currentTodo]);

  return (
    <div className="App-right">
      <div className="details">
        <input type="text" value={name} onChange={onChangeName} />
        <select onChange={onChangeStatus}>
          <option value={Status.Pending}>Pending</option>
          <option value={Status.InProgress}>In progress</option>
          <option value={Status.Done}>Done</option>
        </select>
        <button onClick={onSave}>OK</button>
      </div>
    </div>
  );
};

export default React.memo(Detail);
