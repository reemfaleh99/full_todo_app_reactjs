import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  filterStatus: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    updateTodo: (state, action) => {
      const { id, title, status } = action.payload;

      const updatedList = state.todoList.map((item) =>
        item.id === id ? { ...item, title, status } : item
      );

      state.todoList = updatedList;
      localStorage.setItem("todoList", JSON.stringify(updatedList));
    },

    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
