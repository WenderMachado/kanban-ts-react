import type { Task } from "../entities/task";

export const taskServices ={
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
    const data: Task[] = await response.json()
    return data
  }
}