import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onComplete,
  onDelete,
}: any) {
  return (
    <>
      {tasks.map((task: any) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}