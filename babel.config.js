// babel.config.js
import styleXPlugin from "@stylexjs/babel-plugin"
import path from "path"
const config = {
  plugins: [
    [
      styleXPlugin,
      {
        dev: true,
        // Set this to true for snapshot testing
        // default: false
        test: false,
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: "commonJS",
          // The absolute path to the root directory of your project
          rootDir: path.resolve(),
        },
      },
    ],
  ],
}

export default config
