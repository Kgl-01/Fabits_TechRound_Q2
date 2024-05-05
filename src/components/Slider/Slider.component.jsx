import * as stylex from "@stylexjs/stylex"

import ArrowIcon from "../../assets/carousel/left_arrow.svg"
import { useSliderContext } from "../../context/sliderContext/useSliderConext"
import { rootStyles } from "../../rootStyling.stylex"
import { useRef } from "react"

const styles = stylex.create({
  container: {
    display: "flex",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  slider: (sliderIndex) => ({
    display: "flex",
    transform: `translateX(calc(${sliderIndex} * -15%))`,
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
    left: 0,
    borderRadius: "0 0 2rem 2rem",
  },
  rightHandle: {
    rotate: "180deg",
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
    background: "none",
  },
})

const SliderContainer = ({ children, dataLength, ...props }) => {
  const {
    sliderIndex,
    moveLeft,
    moveRight,
    handleExpandSlider,
    handleCollpaseSlider,
    expandSlider,
  } = useSliderContext()
  const isExpanded = useRef(false)

  return (
    <div {...props} {...stylex.props(styles.container)}>
      {(sliderIndex != 0 || expandSlider == true) && (
        <button
          {...stylex.props(styles.leftHandle, styles.handle)}
          onClick={moveLeft}
        >
          <img src={ArrowIcon} />
        </button>
      )}

      {children}

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
  const { sliderIndex, handleExpandSlider } = useSliderContext()

  return (
    <div
      {...props}
      {...stylex.props(styles.slider(sliderIndex))}
      onClick={handleExpandSlider}
    >
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
