import { Dispatch, SetStateAction } from "react";

export enum Status {
  Pending,
  InProgress,
  Done,
}

export type TodoItemType = {
  id: string;
  name: string;
  status: Status;
};

export type TodoItemHandlers = {
  deleteTodo: (id: string) => void;
  setCurrentTodoID: Dispatch<SetStateAction<null | string>>;
};

export type SearchProps = {
  searchStr: string;
  setSearchStr: Dispatch<SetStateAction<string>>;
};

export type AddInputProps = {
  addTodo: (newTodo: TodoItemType) => void;
};
