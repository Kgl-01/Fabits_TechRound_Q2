import * as styleX from "@stylexjs/stylex"

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
})

const PlanCard = ({ plan, activeId, handleActiveId }) => {
  return (
    <div
      {...styleX.props(styles.container(plan.id == activeId))}
      onClick={() => handleActiveId(plan.id)}
    >
      <img src={plan.src} {...styleX.props(styles.img)} />
      <div {...styleX.props(styles.title)}>{plan?.label}</div>
      <div {...styleX.props(styles.description)}>{plan.description}</div>
    </div>
  )
}

export default PlanCard
