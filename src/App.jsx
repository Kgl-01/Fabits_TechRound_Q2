import { useEffect, useRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import * as stylex from "@stylexjs/stylex"
import FabitsLogo from "./assets/fabits_logo.svg"
import ResizeIcon from "./assets/resize_icon.svg"
import NotificationBellIcon from "./assets/notification_bell_icon.svg"
import NoteStackAdd from "./assets/note_stack_add.svg"

import HomeIcon from "./assets/navbar/home_icon.svg"
import TrackChangesIcon from "./assets/navbar/track_changes_icon.svg"
import BubblesIcon from "./assets/navbar/bubble_chart.svg"
import InvestmentIcon from "./assets/navbar/real_estate_agent.svg"
import AddBusinessIcon from "./assets/navbar/add_business.svg"
import AdminPanelIcon from "./assets/navbar/admin_panel_settings.svg"
import TuneIcon from "./assets/navbar/tune_icon.svg"

import RetirementIcon from "./assets/carousel/retirement_icon.svg"
import EmergencyIcon from "./assets/carousel/emergency_icon.svg"
import WeddingIcon from "./assets/carousel/wedding_icon.svg"
import VacationIcon from "./assets/carousel/vacation_icon.svg"
import GoalCard from "./components/GoalCard.component"

const bell = stylex.keyframes({
  "0%": {
    transform: "rotate(0deg)",
    transition: "all 100ms",
  },

  "35%": {
    transform: "rotate(45deg)",
    transition: "all 100ms",
  },
  "70%": {
    transform: "rotate(-45deg)",
    transition: "all 100ms",
  },
  "100%:": {
    transform: "rotate(0deg)",
    transition: "all 100ms",
  },
})

const offset = stylex.keyframes({
  from: {
    transform: "translateY(0rem)",
    transition: "all 250ms",
  },
  to: {
    transform: "translateY(-0.25rem)",
    transition: "all 250ms",
  },
})

const styles = stylex.create({
  containerSection: {
    width: "100%",
    background: "#F4F7FE",
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    gridTemplateAreas: "aside main main main",
    gap: "2rem",
    minHeight: "100% !important",
  },
  aside: {
    borderRight: "2px solid #D3DBEC",
    background: "#F4F7FE",
    display: "flex",
    padding: "1rem",
    minHeight: "100%",
    position: "relative",
  },

  main: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "3rem",
    paddingRight: "2rem",
    gap: "2rem",
  },

  mainNavbar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "sticky",
    top: "1rem",
    alignSelf: "flex-start",
  },
  cursor: {
    cursor: "pointer",
  },

  navHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonProps: {
    outline: "none",
    border: "none",
    padding: "0rem",
    borderRadius: "50%",
    background: "transparent",
    alignSelf: "flex-start",
    ":active": {
      opacity: "1",
    },
  },
  notificationBell: {
    ":hover": {
      animationName: bell,
      animationDuration: "300ms",
      animationDirection: "linear",
    },
  },
  resizeButton: (width) => ({
    position: "fixed",
    left: `calc(${width}px-20px)`,
    top: "4rem",
  }),
  menuItems: {
    listStyle: "none",
    padding: "0rem",
  },
  menuItem: (isActive) => ({
    display: "flex",
    gap: "1rem",
    paddingLeft: "1rem",
    cursor: "pointer",
    border: isActive && "2px solid #41558D",
    borderRadius: isActive && "0.5rem",
    color: isActive && "#41558D",
    padding: "0.5rem",
    fontSize: "1rem",
  }),
  activeNavItem: {
    display: "none",
    ":checked": {
      ":focus-within": {
        border: "1px solid red",
      },
    },
  },
  flex: {
    display: "flex",
    gap: "1rem",
  },

  bodyHeader: {
    width: "100%",
    height: "100%",
    border: "2px solid #D3DBEC",
    borderRadius: "2rem",
    background: "#ffffff",
    filter: "drop-shadow(0rem 0.7rem 0.5rem #D3DBEC)",
  },
  paragraph: (isSubHeader, isGoalCard) => ({
    padding: "0rem",
    margin: "0rem",
    color: isSubHeader && "#575757",
    fontSize: isGoalCard && "0.7rem",
  }),
  carouselContainer: {
    display: "flex",
    padding: "1.5rem 1.5rem 0rem 1.5rem",
    height: "100%",
  },
  carouselQueryContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "0.5rem",
    height: "12.5rem",
  },

  noteStackIcon: {
    position: "absolute",
    bottom: "0",
    left: "2rem",
  },

  carouselQueryHeader: {
    margin: "0",
    fontWeight: "700",
    fontSize: "1.5rem",
    color: "#2D2D2D",
  },

  goalsContainer: {
    width: "100%",
    height: "100%",
    border: "2px solid #D3DBEC",
    borderRadius: "2rem",
    background: "#ffffff",
    padding: "1.2rem",
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
  },
  goalCard: (isValidItem) => ({
    flex: "1 1 30%",
    maxWidth: isValidItem && "30%",
    aspectRatio: "0.75/1",
    border: "2px solid #D3DBEC",
    borderRadius: "2.5rem",
    padding: "1.2rem",
    transform: "translateY(0rem)",
    transition: "all 0.1s",
    background: "#fff",
    ":hover": {
      cursor: "pointer",
      transform: "translateY(-0.25rem)",
      transition: "all 0.1s ease-in",
      filter: "drop-shadow(0rem 1rem 1rem rgba(36, 47, 78, 0.12))",
    },
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
  goalCardList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    paddingTop: "1.5rem",
    justifyContent: "flex-start",
  },
})

const financeMenuItems = [
  {
    id: "plan-a-goal",
    label: "Plan a Goal",
    value: "goal",
    iconSource: TrackChangesIcon,
  },
  {
    id: "discover-top-funds",
    label: "Discover Top Funds",
    value: "topFunds",
    iconSource: BubblesIcon,
  },
  {
    id: "my-investments",
    label: "My Investments",
    value: "myInvestments",
    iconSource: InvestmentIcon,
  },
  { id: "ipo", label: "IPO", value: "ipo", iconSource: AddBusinessIcon },
]

const insuranceMenuItems = [
  {
    id: "insurance-1",
    label: "Insurance",
    value: "insurance1",
    iconSource: AdminPanelIcon,
  },
  {
    id: "insurance-2",
    label: "Insurance",
    value: "insurance2",
    iconSource: TuneIcon,
  },
]

const goalItems = [
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "none",
    },
    footer: {
      progressSource: "Hello",
      status: "Hi",
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "none",
    },
    footer: {
      progressSource: "Hello",
      status: "Hi",
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "none",
    },
    footer: {
      progressSource: "Hello",
      status: "Hi",
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "none",
    },
    footer: {
      progressSource: "Hello",
      status: "Hi",
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "none",
    },
    footer: {
      progressSource: "Hello",
      status: "Hi",
    },
  },
]

const carouselItems = [
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
  { id: "", icon: "", title: "", description: "" },
]

const App = () => {
  const navbarRef = useRef(null)
  const [activeNavItem, setActiveNavItem] = useState(financeMenuItems[0].value)

  useEffect(() => {
    console.log(navbarRef.current?.clientWidth)
  }, [])

  return (
    <section {...stylex.props(styles.containerSection)}>
      <aside {...stylex.props(styles.aside)} ref={navbarRef}>
        <nav {...stylex.props(styles.mainNavbar)}>
          <header {...stylex.props(styles.navHeader)}>
            <img src={FabitsLogo} {...stylex.props(styles.cursor)} />
            <button {...stylex.props(styles.buttonProps)}>
              <img
                src={NotificationBellIcon}
                {...stylex.props(styles.cursor, styles.notificationBell)}
              />
            </button>
          </header>
          <ul {...stylex.props(styles.menuItems)}>
            <li
              {...stylex.props(styles.menuItem, styles.cursor)}
              onClick={() => setActiveNavItem("")}
            >
              <img src={HomeIcon} />
              <>Home</>
            </li>

            <ul {...stylex.props(styles.menuItems)}>
              FINANCE
              {financeMenuItems.map((item, index) => (
                <li
                  key={index}
                  {...stylex.props(
                    styles.menuItem(item.value == activeNavItem)
                  )}
                >
                  <img src={item.iconSource} />
                  <label
                    htmlFor={item.id}
                    {...stylex.props(styles.flex, styles.cursor)}
                  >
                    <>{item.label}</>
                    <input
                      type="radio"
                      value={item.value}
                      id={item.id}
                      checked={item.value == activeNavItem}
                      onChange={(e) => {
                        console.log(e.target.value)
                        setActiveNavItem(e.target.value)
                      }}
                      {...stylex.props(styles.activeNavItem)}
                    />
                  </label>
                </li>
              ))}
            </ul>

            <ul {...stylex.props(styles.menuItems)}>
              INSURANCE
              {insuranceMenuItems.map((item, index) => (
                <li
                  key={index}
                  {...stylex.props(
                    styles.menuItem(item.value == activeNavItem)
                  )}
                >
                  <img src={item.iconSource} />
                  <label htmlFor={item.id} {...stylex.props(styles.cursor)}>
                    {item.label}{" "}
                    <input
                      type="radio"
                      value={item.value}
                      id={item.id}
                      checked={item.value == activeNavItem}
                      onChange={(e) => {
                        console.log(e.target.value)
                        setActiveNavItem(e.target.value)
                      }}
                      {...stylex.props(styles.activeNavItem)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </ul>
        </nav>
        <button {...stylex.props(styles.buttonProps)}>
          {console.log(navbarRef.current?.clientWidth)}
          <img
            src={ResizeIcon}
            {...stylex.props(
              styles.resizeButton(navbarRef?.current?.clientWidth)
            )}
          />
        </button>
      </aside>
      <main {...stylex.props(styles.main)}>
        <header {...stylex.props(styles.bodyHeader)}>
          <nav {...stylex.props(styles.carouselContainer)}>
            <div {...stylex.props(styles.carouselQueryContainer)}>
              <span {...stylex.props(styles.carouselQueryHeader)}>
                What financial goal do{" "}
                <p {...stylex.props(styles.paragraph)}>
                  you want to plan today?
                </p>
              </span>
              <p {...stylex.props(styles.paragraph(true))}>
                Select a goal to start planning.
              </p>
              <img src={NoteStackAdd} {...stylex.props(styles.noteStackIcon)} />
            </div>
          </nav>
        </header>

        <section {...stylex.props(styles.goalsContainer)}>
          <header>
            <span {...stylex.props(styles.sectionTitle)}>
              Track current goals
            </span>
          </header>
          <hr style={{ width: "100%" }} />
          {/* <div {...stylex.props(styles.goalCard)}>
            <div {...stylex.props(styles.goalCardHeader)}>
              <img
                src={VacationIcon}
                style={{ width: "4rem", aspectRatio: "1/1" }}
              />
              <div {...stylex.props(styles.goalCardTitle)}>
                <span>Dhairyadev & Sayali's</span>
                <p {...stylex.props(styles.paragraph)}>Vacation Plan 1</p>
              </div>
            </div>
            <hr style={{ width: "100%", border: "1px solid #D3DBEC" }} />
            <div {...stylex.props(styles.goalInfo)}>
              <div {...stylex.props(styles.goalInfoRow)}>
                <div>
                  Goal Progress{" "}
                  <p {...stylex.props(styles.paragraph)}>
                    &#8377; 11,24,00,000
                  </p>
                </div>
                <div>
                  Goal Amount{" "}
                  <p {...stylex.props(styles.paragraph(true))}>
                    &#8377; 15,00,00,000
                  </p>
                </div>
              </div>
              <div {...stylex.props(styles.goalInfoRow)}>
                <div>
                  Goal Date{" "}
                  <p {...stylex.props(styles.paragraph)}>March 2035</p>
                </div>
                <div>
                  Hello <p {...stylex.props(styles.paragraph)}>Goal Health</p>
                </div>
              </div>
            </div>
          </div> */}
          <div {...stylex.props(styles.goalCardList)}>
            {goalItems.map((goal, index) => (
              <GoalCard
                goal={goal}
                key={index}
                index={index}
                listLength={goalItems.length}
              >
                <GoalCard.Header />
                <GoalCard.HorizontalLine />
                <GoalCard.Body />
                <GoalCard.HorizontalLine />
                <GoalCard.Footer />
              </GoalCard>
            ))}
            <div
              style={{
                flex: "1 1 20rem",
                width: "30%",
                alignSelf: "flex-start",
              }}
            ></div>
          </div>
        </section>
      </main>
    </section>
  )
}

export default App
