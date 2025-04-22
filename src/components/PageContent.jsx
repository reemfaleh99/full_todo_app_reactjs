import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const PageContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedList = [...todoList];
  sortedList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodo = sortedList.filter((item) => {
    if (filterStatus === "all") return true;

    return item.status === filterStatus;
  });

  return (
    <div>
      {filteredTodo && filteredTodo.length > 0
        ? filteredTodo.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        : "no todo found"}
    </div>
  );
};

export default PageContent;
