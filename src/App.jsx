import { useEffect, useRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import * as stylex from "@stylexjs/stylex"
import FabitsLogo from "./assets/fabits_logo.svg"
import ResizeIcon from "./assets/resize_icon.svg"
import NotificationBellIcon from "./assets/notification_bell_icon.svg"

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
    background: "#F4F7FE !important",
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
})

const App = () => {
  const navbarRef = useRef(null)

  useEffect(() => {
    console.log(navbarRef.current.clientWidth)
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
        </nav>
      </aside>
    </section>
  )
}

export default App
