import React, { useState } from "react";
import Button from "./Button";
import SelectButton from "./SelectButton";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../redux/slices/todoSlice";

const PageHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(todoAction.updateFilterStatus(e.target.value));
  };

  return (
    <div className="my-16 flex justify-between">
      <div onClick={() => setModalOpen(true)}>
        <Button variant="primary">add task</Button>
      </div>
      <SelectButton value={filterStatus} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="incomplete">incomplete</option>
        <option value="complete">complete</option>
      </SelectButton>
      <TodoModal type="add" setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </div>
  );
};

export default PageHeader;
