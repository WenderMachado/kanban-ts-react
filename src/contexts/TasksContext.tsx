import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../entities/task";
import { taskServices } from "../services/api";


export interface TaskContextData{
  tasks: Task[],
  createTask: (attributes:Omit<Task, "id">) =>Promise<void>
  updateTask: (id: string, atributes: Partial<Omit<Task, "id">>) =>Promise<void>
  deleteTask:(id:string) => Promise<void>
}
export const TaskContext = createContext({} as TaskContextData)

interface TaskContextProviderProps{
  children: ReactNode
}
export const TaskContextProvider: React.FC<TaskContextProviderProps> =( {children}) =>{
   const [tasks, setTasks] = useState<Task[]>([])
   useEffect(()=>{
      taskServices.fetchTasks().then((data)=> setTasks(data))
   },[])
    const createTask = async (attributes: Omit<Task, "id">) =>{
      const newTask = await taskServices.createTask(attributes)
      setTasks((currentState)=>{
        const updateTasks = [...currentState, newTask]
        return updateTasks
      })
      
    }
    const updateTask = async (id: string, attributes: Partial<Omit<Task, "id">>) => {
      await taskServices.updateTask(id, attributes)
      setTasks((currentState) => {
        return currentState.map((task) => {
          if (task.id === id) {
            return { ...task, ...attributes }
          }
          return task
        })
      })
}

    const deleteTask = async(id:string)=>{
      await taskServices.deleteTask(id)
      setTasks((currentState) => currentState.filter((task)=> task.id !== id))
    } 
    return (
      <TaskContext.Provider value={{tasks, createTask, updateTask, deleteTask}}>
          {children}
      </TaskContext.Provider>
    )
}