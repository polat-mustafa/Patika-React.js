import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: 1,
        text: "Learn React",
        completed: false,
      },
      {
        id: 2,
        text: "Learn Redux",
        completed: false,
      },
      {
        id: 3,
        text: "Learn TypeScript",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },
    deleteTodo: (state, action) => {
      const id = action.payload
      const filtered = state.todos.filter(item => item.id !== id)
      state.todos = filtered
      
    },
    filterTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.completed === action.payload
      );
    },
    editTodo: (state, action) => {
      state.todos[action.payload].text = action.payload.text;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  filterTodo,
  editTodo,
  deleteAll,
} = todoSlice.actions;
export default todoSlice.reducer;
