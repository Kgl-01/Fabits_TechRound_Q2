import { createContext } from "react"

export const SliderContext = createContext({
  sliderIndex: null,
  expandSlider: false,
  activeId: null,
  moveLeft: () => null,
  moveRight: () => null,
  handleExpandSlider: () => null,
  handleActiveItemId: () => null,
  handleCollpaseSlider: () => null,
})
