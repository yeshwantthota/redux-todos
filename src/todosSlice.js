// todosSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("http://localhost:3000/todos");
  const data = await response.json();
  return data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    prevList: [],
    todoDone: [],
    status: "pending",
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    filterTodos: (state, action) => {
      state.prevList = state.list;
      state.list = state.list.filter((todo) =>
        todo.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearSearchFilter: (state) => {
      state.list = state.prevList;
    },
    addTodoDone: (state, action) => {
      state.todoDone.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.list = action.payload;
    });
  },
});

export const {
  addTodo,
  removeTodo,
  filterTodos,
  clearSearchFilter,
  addTodoDone,
} = todosSlice.actions;

export default todosSlice.reducer;
