import { Status } from "./types";

export const getTodoItemClassName = (status: Status) => {
  let itemClassName = "list__item";
  switch (status) {
    case Status.Pending:
      itemClassName += " list__item--pending";
      break;
    case Status.InProgress:
      itemClassName += " list__item--progress";
      break;
    case Status.Done:
      itemClassName += " list__item--done";
      break;
  }
  return itemClassName;
};
