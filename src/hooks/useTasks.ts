import { useContext } from "react"
import { TaskContext } from "../contexts/TasksContext"

export const useTasks = () =>{
  return useContext(TaskContext)
}