import { useEffect, useRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import * as stylex from "@stylexjs/stylex"
import FabitsLogo from "./assets/fabits_logo.svg"
import ResizeIcon from "./assets/resize_icon.svg"
import NotificationBellIcon from "./assets/notification_bell_icon.svg"

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
    transition: "all 250ms",
  },

  "35%": {
    transform: "rotate(45deg)",
    transition: "all 250ms",
  },
  "70%": {
    transform: "rotate(-45deg)",
    transition: "all 250ms",
  },
  "100%:": {
    transform: "rotate(0deg)",
    transition: "all 250ms",
  },
})

const styles = stylex.create({
  containerSection: {
    width: "100%",
    position: "relative",
    background: "#F4F7FE",
  },
  aside: {
    width: "20rem",
    height: "100vh",
    border: "1px solid #D3DBEC",
    boxSizing: "border-box",
    background: "#F4F7FE",
    display: "flex",
    padding: "1rem",
    position: "fixed",
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
      animationDuration: "2s",
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
      <main>
        <nav></nav>
      </main>
    </section>
  )
}

export default App
