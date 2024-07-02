import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <AddTodoModal/>
        <Button className="px-4 py-3 bg-primary-gradient mb-4">Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-1 ">
        <div className="bg-white rounded-lg p-2 h-full w-full space-y-4">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
