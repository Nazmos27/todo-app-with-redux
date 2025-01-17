import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {

  const [priority, setPriority] = useState('')

  //*From local state
  // const { todos } = useAppSelector((state) => state.todos);

  //*From server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading..........................</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <AddTodoModal />
        <TodoFilter  priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-1 ">
        <div className="bg-white rounded-lg p-2 h-full w-full space-y-4">
          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
