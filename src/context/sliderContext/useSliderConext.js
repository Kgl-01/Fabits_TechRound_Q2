import { useContext } from "react"
import { SliderContext } from "./sliderContext"

export const useSliderContext = () => {
  const values = useContext(SliderContext)
  if (values == null) {
    throw new Error("Must be wrapped up by slider context provider")
  }
  return values
}
