import * as stylex from "@stylexjs/stylex"
import { GoalContext } from "../context/goalContext.provider"
import { useGoal } from "../hooks/useGoal"

const styles = stylex.create({
  hr: {
    width: "100%",
    border: "1px solid #D3DBEC",
  },
  goalCard: (isValidIndex) => ({
    flex: "1 1 20rem",
    // flexGrow: isValidIndex && "0",
    width: "30%",
    aspectRatio: "0.75/1",
    border: "2px solid #D3DBEC",
    borderRadius: "2.5rem",
    padding: "1.2rem",
    transform: {
      default: "translateY(0rem)",
      ":hover": "translateY(-0.25rem)",
    },
    transition: {
      default: "all 0.1s ease-in-out",
      ":hover": "all 0.1s ease-in",
    },
    background: "#fff",
    filter: {
      ":hover": "drop-shadow(0rem 1rem 1rem rgba(36, 47, 78, 0.12))",
    },
    cursor: "pointer",
  }),
  goalCardHeader: {
    display: "flex",
    width: "100%",
    gap: "1.4rem",
  },
  goalCardTitle: {
    fontWeight: "600",
    fontSize: "1.2rem",
  },
  goalInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  goalInfoRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  p: {
    padding: 0,
    margin: 0,
  },
})

const GoalCard = ({ children, goal, index, listLength }) => {
  return (
    <GoalContext.Provider value={{ goal }}>
      <div
        {...stylex.props(
          styles.goalCard(index == listLength - 1 || index == listLength - 2)
        )}
      >
        {children}
      </div>
    </GoalContext.Provider>
  )
}

const GoalCardHeader = ({ children }) => {
  const {
    goal: { header },
  } = useGoal()
  return (
    <header {...stylex.props(styles.goalCardHeader)}>
      <img src={header.imgSrc} style={{ width: "4rem", aspectRatio: "1/1" }} />
      <div {...stylex.props(styles.goalCardTitle)}>
        <span>{header.title}</span>
        <p {...stylex.props(styles.p)}>{header.plan}</p>
      </div>
      {children}
    </header>
  )
}

const HorizontalLine = () => {
  return <hr {...stylex.props(styles.hr)} />
}

const CardBody = ({ children }) => {
  const {
    goal: { cardBody },
  } = useGoal()

  return (
    <div {...stylex.props(styles.goalInfo)}>
      <div {...stylex.props(styles.goalInfoRow)}>
        <div>
          {cardBody.rowTitle1}
          <p {...stylex.props(styles.p)}>&#8377; {cardBody.rowValue1}</p>
        </div>
        <div>
          {cardBody.rowTitle2}
          <p {...stylex.props(styles.p)}>&#8377; {cardBody.rowValue2}</p>
        </div>
      </div>
      <div {...stylex.props(styles.goalInfoRow)}>
        <div>
          {cardBody.rowTitle3}{" "}
          <p {...stylex.props(styles.p)}>{cardBody.rowValue3}</p>
        </div>
        <div>
          {cardBody.rowTitle4}
          <p {...stylex.props(styles.p)}>{cardBody.rowValue4}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

const Footer = ({ children }) => {
  const {
    goal: { footer },
  } = useGoal()

  return (
    <footer>
      <img src={footer.progressSource} style={{ width: "100%" }} />
      <p {...stylex.props(styles.p)}>{footer.status}</p>
      {children}
    </footer>
  )
}

GoalCard.Header = GoalCardHeader
GoalCard.HorizontalLine = HorizontalLine
GoalCard.Body = CardBody
GoalCard.Footer = Footer

export default GoalCard
