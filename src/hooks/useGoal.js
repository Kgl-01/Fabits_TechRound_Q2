import { useContext } from "react"
import { GoalContext } from "../context/goalContext.provider"

export const useGoal = () => {
  const value = useContext(GoalContext)
  if (value == null) {
    throw new Error("Wrap inside goal context provider")
  }

  return value
}
