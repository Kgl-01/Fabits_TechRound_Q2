import * as styleX from "@stylexjs/stylex"
import { useSliderContext } from "../../context/sliderContext/useSliderConext"

const styles = styleX.create({
  container: (isActive) => ({
    width: "80%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    cursor: "pointer",
    boxShadow: isActive && "0rem 0rem 1rem #D3DBEC",
    paddingLeft: "0.2rem",
    borderRadius: "1rem",
    boxSizing: "border-box",
    padding: "0.5rem 0rem 0rem 0.3rem",
    transition: "boxShadow 1s ease-out !important",
    background: "#fff",
    position: "relative",
  }),
  title: {
    fontWeight: "600",
  },
  img: {
    borderRadius: "50%",
    width: "3rem",
  },
  description: {
    color: "#575757",
    fontSize: "0.85rem",
    textWrap: "balance",
  },
  moreIcon: {
    position: "absolute",
    right: "1rem",
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#808DB3",
  },
})

const PlanCard = ({ plan }) => {
  const { activeId, handleActiveItemId } = useSliderContext()

  return (
    <div
      {...styleX.props(styles.container(plan.id == activeId))}
      onClick={() => handleActiveItemId(plan.id)}
    >
      {plan.id == activeId && (
        <span {...styleX.props(styles.moreIcon)}>{">"}</span>
      )}
      <img src={plan.src} {...styleX.props(styles.img)} />
      <div {...styleX.props(styles.title)}>{plan?.label}</div>
      <div {...styleX.props(styles.description)}>{plan.description}</div>
    </div>
  )
}

export default PlanCard
