import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
  header: {
    color: "red",
    fontFamily: "Manrope",
  },
})

function App() {
  const [count, setCount] = useState(0)

  return <h1 {...stylex.props(styles.header)}>Amma</h1>
}

export default App
