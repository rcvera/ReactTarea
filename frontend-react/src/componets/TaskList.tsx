import "./TaskList.css";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskList({
  tasks,
  onComplete,
  onDelete,
}: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}