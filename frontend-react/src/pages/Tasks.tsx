import "./Tasks.css";
import { useEffect, useState } from "react";

import TaskForm from "../componets/TaskForm";
import TaskList from "../componets/TaskList";

import {
  createTask,
  getTasks,
  completeTask,
  deleteTask
} from "../services/taskService";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task: any) => {
    await createTask(task);
    loadTasks();
  };

  const complete = async (id: number) => {
    await completeTask(id);
    loadTasks();
  };

  const remove = async (id: number) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <>
    <div className="tasks-page"></div>
      <TaskForm onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onComplete={complete}
        onDelete={remove}
      />
    </>
  );
}