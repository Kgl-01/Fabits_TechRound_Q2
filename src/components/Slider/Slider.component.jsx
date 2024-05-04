import * as stylex from "@stylexjs/stylex"
import Arrow from "../../assets/carousel/left_arrow.svg"
import { useCallback, useEffect, useRef, useState } from "react"

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
    pointerEvents: "none",
  },
  rotateArrow: (isCustom) => ({
    rotate: !isCustom && "180deg",
  }),

  arrow: {
    cursor: "pointer",
    zIndex: "1",
    pointerEvents: "all",
  },
  leftArrow: (show) => ({
    position: "absolute",
    left: "0rem",
    display: show ? "block" : "none",
  }),
  rightArrow: (show) => ({
    position: "absolute",
    right: "0rem",
    display: show ? "block" : "none",
  }),
  childrenContainer: (translate) => ({
    width: "100%",
    display: "flex",
    scrollbarWidth: "none",
    gap: "1rem",
    height: "100%",
    transform: `translateX(${translate}%)`,
    transition: "transform 0.25s ease-in-out",
  }),
})

const Slider = ({ children, ...props }) => {
  const { leftArrow, rightArrow } = props
  const [translate, setTranslate] = useState(0)
  const sliderRef = useRef(null)
  const containerRef = useRef(null)

  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleSlideLeft = () => {
    setTranslate((currentTranslate) => currentTranslate + 30)
  }
  const handleSlideRight = () => {
    setTranslate((currentTranslate) => currentTranslate - 30)
  }

  useEffect(() => {
    const container = containerRef.current
    const slider = sliderRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target

          console.log(container.offsetLeft)

          const trackArrow = entry.target.dataset.trackArrow

          if (trackArrow == 0) {
            setShowLeftArrow(!entry.isIntersecting)
            console.log(`element ${trackArrow}:` + element.offsetLeft)
          } else {
            setShowRightArrow(!entry.isIntersecting)
            console.log(`element ${trackArrow}:` + element.offsetLeft)
          }
        })
      },
      {
        root: slider,
        threshold: 1,
      }
    )
    if (container != null) {
      const children = container.children
      const filteredChildren = [...children].filter(
        (child, index) => index == 0 || index == children.length - 1
      )

      console.log({ filteredChildren })

      filteredChildren.forEach((child, index) => {
        observer.observe(child)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [translate])

  return (
    <div ref={sliderRef} {...stylex.props(styles.sliderContainer)} {...props}>
      <img
        alt="left-arrow"
        src={leftArrow ? leftArrow : Arrow}
        {...stylex.props(styles.arrow, styles.leftArrow(showLeftArrow))}
        onClick={handleSlideLeft}
      />
      <img
        alt="right-arrow"
        src={rightArrow ? rightArrow : Arrow}
        {...stylex.props(
          styles.rotateArrow(rightArrow),
          styles.arrow,
          styles.rightArrow(showRightArrow)
        )}
        onClick={handleSlideRight}
      />
      <div
        {...stylex.props(styles.childrenContainer(translate))}
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Slider
