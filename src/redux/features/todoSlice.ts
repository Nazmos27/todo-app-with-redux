import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => action.payload !== item.id);
    },
    toggleCompleted : (state, action : PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload)
      task!.isCompleted = !task?.isCompleted //here ! used for implicit type or something like that
    }
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
