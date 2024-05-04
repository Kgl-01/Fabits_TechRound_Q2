import * as stylex from "@stylexjs/stylex"
import Arrow from "../../assets/carousel/left_arrow.svg"
import { useState } from "react"

const styles = stylex.create({
  sliderContainer: {
    width: "100%",
    height: "100%",
    border: "1px solid red",
    padding: "0.7rem",
    display: "flex",
    gap: "1rem",
    overflow: "auto",
    scrollbarWidth: "none",
    position: "relative",
    alignItems: "center",
  },
  rotateArrow: (isCustom) => ({
    rotate: !isCustom && "180deg",
  }),

  arrow: {
    cursor: "pointer",
    zIndex: "1",
  },
  leftArrow: {
    position: "absolute",
    left: "0rem",
  },
  rightArrow: {
    position: "absolute",
    right: "0rem",
  },
  childrenContainer: (marginLeft) => ({
    width: "100%",
    display: "flex",
    scrollbarWidth: "none",
    gap: "1rem",
    height: "100%",
    transform: `translateX(${marginLeft}%)`,
    transition: "transform 0.25s ease-in-out",
  }),
})

const Slider = ({ children, ...props }) => {
  const { leftArrow, rightArrow } = props
  const [margin, setMargin] = useState(0)

  const handleSlideLeft = () => {
    setMargin((currentMargin) => currentMargin - 30)
  }
  const handleSlideRight = () => {
    setMargin((currentMargin) => currentMargin + 30)
  }

  return (
    <div {...stylex.props(styles.sliderContainer)} {...props}>
      <img
        alt="left-arrow"
        src={leftArrow ? leftArrow : Arrow}
        {...stylex.props(styles.arrow, styles.leftArrow)}
        onClick={handleSlideLeft}
      />
      <img
        alt="right-arrow"
        src={rightArrow ? rightArrow : Arrow}
        {...stylex.props(
          styles.rotateArrow(rightArrow),
          styles.arrow,
          styles.rightArrow
        )}
        onClick={handleSlideRight}
      />
      <div {...stylex.props(styles.childrenContainer(margin))}> {children}</div>
    </div>
  )
}

export default Slider
