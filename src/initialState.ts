import { Status, TodoItem } from "./types";

export const initialTodos: TodoItem[] = [
  {
    id: 1,
    name: "todo 1",
    status: Status.InProgress,
  },
  {
    id: 2,
    name: "todo 2",
    status: Status.Pending,
  },
  {
    id: 3,
    name: "todo 32",
    status: Status.Done,
  },
];
