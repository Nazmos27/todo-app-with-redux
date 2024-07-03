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
    },
    sortTodos : (state) => {
      state.todos = state.todos.sort((a, b) => {
        if (a.isCompleted < b.isCompleted) {
          return -1;
        }
        if (a.isCompleted > b.isCompleted) {
          return 1;
        }
        return 0;
      });
    }
  },
});

export const { addTodo, deleteTodo, toggleCompleted, sortTodos } = todoSlice.actions;

export default todoSlice.reducer;
