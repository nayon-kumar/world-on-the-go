import { getTasks } from "@/lib/tasks";
import TaskCard from "@/ui/TaskCard";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div className="px-5">
      <p className="mt-4">Tasks: {tasks.length}</p>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
