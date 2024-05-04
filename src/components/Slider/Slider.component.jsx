import * as stylex from "@stylexjs/stylex"

import ArrowIcon from "../../assets/carousel/left_arrow.svg"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { rootStyles } from "../../rootStyling.stylex"

const styles = stylex.create({
  container: {
    display: "flex",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  slider: (sliderIndex) => ({
    display: "flex",
    transform: `translateX(calc(${sliderIndex} * -13%))`,
    margin: "0rem .25rem",
    flexGrow: 1,
    transition: "transform 1s ease-in-out",
    alignItems: "center !important",
  }),
  item: {
    flex: "0 0 15%",
    maxWidth: "15%",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leftHandle: {
    background: "linear-gradient(to right, white,rgba(255,255,255,0.4))",
    boxShadow: "-1rem 0rem 2rem rgba(255,255,255,1)",
    left: 0,
  },
  rightHandle: {
    rotate: "180deg",
    background: "linear-gradient(to left,rgba(255,255,255,0.5), white)",
    // boxShadow: "1rem 0rem 3rem rgba(0,0,0,0.25)",
    borderRadius: "2rem 0rem 0rem 0.6rem",
    right: 0,
  },
  handle: {
    width: rootStyles.sliderPadding,
    zIndex: 10,
    cursor: "pointer",
    flexGrow: "0",
    position: "absolute",
    border: "none",
    height: "100%",
  },
})

const SliderContext = createContext({
  sliderIndex: null,
})

const SliderContainer = ({ children, dataLength, ...props }) => {
  const [sliderIndex, setSliderIndex] = useState(0)

  const moveLeft = () => {
    setSliderIndex((c) => c - 2)
  }

  const moveRight = () => {
    setSliderIndex((c) => c + 2)
  }

  return (
    <div {...props} {...stylex.props(styles.container)}>
      {sliderIndex != 0 && (
        <button
          {...stylex.props(styles.leftHandle, styles.handle)}
          onClick={moveLeft}
        >
          <img src={ArrowIcon} />
        </button>
      )}
      <SliderContext.Provider value={{ sliderIndex }}>
        {children}
      </SliderContext.Provider>

      {sliderIndex < dataLength * (3 / 4) && (
        <button
          {...stylex.props(styles.rightHandle, styles.handle)}
          onClick={moveRight}
        >
          <img src={ArrowIcon} />
        </button>
      )}
    </div>
  )
}

const Slider = ({ children, ...props }) => {
  const { sliderIndex } = useContext(SliderContext)
  return (
    <div {...props} {...stylex.props(styles.slider(sliderIndex))}>
      {children}
    </div>
  )
}

const Item = ({ children, ...props }) => {
  return (
    <div {...props} {...stylex.props(styles.item)}>
      {children}
    </div>
  )
}

SliderContainer.Slider = Slider
SliderContainer.Item = Item

export default SliderContainer
