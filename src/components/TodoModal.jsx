import React, { useEffect, useState } from "react";
import SelectButton from "./SelectButton";
import Button from "./Button";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { todoAction } from "../redux/slices/todoSlice";
import { toast } from "react-toastify";

const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("title should not be empty");
      return;
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          todoAction.addTodo({
            id: uuidv4(),
            title,
            status,
            time: new Date().toLocaleDateString(),
          })
        );
        toast.success("task added");
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            todoAction.updateTodo({
              ...todo,
              title,
              status,
            })
          );
          toast.success("task updated");
        } else toast.error("no change made");
      }
      setModalOpen(false);
    }
  };

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-9 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
          <div className="w-[500px] w-[90%] mx-auto bg-gray-200 p-16 rounded-xl relative bg-gray-100">
            <div
              onClick={() => {
                setModalOpen(false);
              }}
              className="absolute text-2xl bg-gray-100 p-2 rounded-xl -top-10 right-0 cursor-pointer hover:bg-red-500 hover:text-white duration-300"
            >
              <MdOutlineClose />
            </div>
            <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
              <h1 className="text-gray-500 text-xl font-medium">
                {type === "update" ? "Update" : "Add"} Task
              </h1>
              <input
                type="text"
                id="title"
                placeholder="add task"
                className="my-10 w-full p-3 bg-white rounded-xl text-xl"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="flex justify-between">
                <SelectButton
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">incomplete</option>
                  <option value="complete">complete</option>
                </SelectButton>
                <div>
                  <Button type="submit" variant="primary">
                    {type === "update" ? "Update" : "Add"} task
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModal;
