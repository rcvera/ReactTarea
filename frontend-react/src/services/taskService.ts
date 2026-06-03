import axios from "axios";

const API = "http://localhost:3000/tasks";

export const getTasks = () => axios.get(API);

export const createTask = (task: any) =>
  axios.post(API, task);

export const completeTask = (id: number) =>
  axios.patch(`${API}/${id}`);

export const deleteTask = (id: number) =>
  axios.delete(`${API}/${id}`);