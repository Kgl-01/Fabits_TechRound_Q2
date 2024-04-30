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

const styles = stylex.create({
  containerSection: {
    width: "100%",
    position: "relative",
    background: "#F4F7FE",
    display: "flex",
    gap: "2rem",
  },
  aside: {
    width: "20rem",
    height: "100vh",
    borderRight: "2px solid #D3DBEC",
    boxSizing: "border-box",
    background: "#F4F7FE",
    display: "flex",
    padding: "1rem",
    position: "sticky",
  },
  mainNavbar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
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
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "3rem 2rem 0rem 0rem",
  },
  bodyHeader: {
    width: "100%",
    height: "14rem",
    border: "2px solid #D3DBEC",
    borderRadius: "2rem",
    boxSizing: "border-box",
    background: "#ffffff",
    filter: "drop-shadow(0rem 0.7rem 0.5rem #D3DBEC)",
  },
  paragraph: (isSubHeader) => ({
    padding: "0rem",
    margin: "0rem",
    color: isSubHeader && "#575757",
  }),
  carouselContainer: {
    display: "flex",
    boxSizing: "border-box",
    padding: "1.5rem 1.5rem 0rem 1.5rem",
    height: "100%",
  },
  carouselQueryContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "0.5rem",
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
        <section></section>
      </main>
    </section>
  )
}

export default App
