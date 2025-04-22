import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { todoAction } from "../redux/slices/todoSlice";
import TodoModal from "./TodoModal";
import Checkbox from "./Checkbox";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(todoAction.deleteTodo(todo.id));
  };
  const handleEdit = () => {
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      todoAction.updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else setChecked(false);
  }, [todo.status]);

  return (
    <>
      <div className="flex items-center justify-between p-10 bg-white mb-10 rounded-xl">
        <div className="flex items-center justify-start gap-2">
          <Checkbox checked={checked} handleCheck={handleCheck} />
          <div className="flex flex-col">
            <p
              className={`font-semibold text-lg ${
                todo.status === "complete" && "line-through opacity-50"
              }`}
            >
              {todo.title}
            </p>
            <p className="text-md text-gray-500">
              {format(new Date(todo.time), "p, dd/MM/yyyy")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            className="text-xl p-5 rounded-xl bg-gray-200 cursor-pointer duration-300 hover:bg-red-500 hover:text-white"
            onClick={handleDelete}
          >
            <MdDelete />
          </div>
          <div
            className="text-xl p-5 rounded-xl bg-gray-200 cursor-pointer duration-300 hover:bg-gray-300"
            onClick={handleEdit}
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModal
        type="update"
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
};

export default TodoItem;
