import { Dispatch, SetStateAction } from "react";

export enum Status {
  Pending,
  InProgress,
  Done,
}

export type TodoItem = {
  id: number;
  name: string;
  status: Status;
};

export type TodoItemHandles = {
  deleteTodo: (id: number) => void;
  setCurrentTodoID: Dispatch<SetStateAction<null | number>>;
};
