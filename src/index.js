import React from 'react'
import styles from './styles.module.css'
export { ThemeProvider } from './theme/themeContext'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
