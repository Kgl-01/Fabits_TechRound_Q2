import { useRef, useState } from "react"
import { SliderContext } from "./sliderContext"

export const SliderContextProvider = ({ children }) => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const [expandSlider, setExpandSlider] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const isExpanded = useRef(false)

  const moveLeft = () => {
    if (
      expandSlider == true &&
      sliderIndex == 0 &&
      isExpanded.current == true
    ) {
      handleCollpaseSlider()
    } else {
      setSliderIndex((c) => c - 2)
    }
  }

  const moveRight = () => {
    setSliderIndex((c) => c + 2)
  }

  const handleActiveItemId = (id) => {
    setActiveId(id)
  }

  const handleExpandSlider = () => {
    if (isExpanded.current == true) return
    isExpanded.current = true
    setExpandSlider(true)
    setActiveId(1)
  }

  function handleCollpaseSlider() {
    setExpandSlider(false)
    setSliderIndex(0)
    setActiveId(null)
    isExpanded.current = false
  }

  return (
    <SliderContext.Provider
      value={{
        sliderIndex,
        expandSlider,
        activeId,
        moveLeft,
        moveRight,
        handleExpandSlider,
        handleActiveItemId,
        handleCollpaseSlider,
      }}
    >
      {children}
    </SliderContext.Provider>
  )
}
