import React, { FC, ChangeEvent, useEffect, useState } from "react";
import { TodoItem, Status } from "../types";

type DetailProps = {
  currentTodo: TodoItem | any;
  updateTodo: (id: number, newTodo: TodoItem) => void;
};

const Detail: FC<DetailProps> = ({ currentTodo, updateTodo }) => {
  const [name, setName] = useState(currentTodo.name);
  const [status, setStatus] = useState(Status.Pending);

  const onSave = () => {
    if (name.trim()) {
      updateTodo(currentTodo.id, { ...currentTodo, name, status });
    }
  };
  useEffect(() => {
    setName(currentTodo.name); // обновляем имя редактируемой todo в инпуте, если было инициировано редактирование другой todo
  }, [currentTodo]);

  return (
    <div className="detail">
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setStatus(e.target.options.selectedIndex)
        }
      >
        <option value={Status.Pending}>Pending</option>
        <option value={Status.InProgress}>In progress</option>
        <option value={Status.Done}>Done</option>
      </select>
      <button onClick={() => onSave()}>OK</button>
    </div>
  );
};

export default React.memo(Detail);
