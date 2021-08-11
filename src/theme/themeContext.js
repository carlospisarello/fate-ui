import React from 'react'
import theme from './theme'

export const ThemeContext = React.createContext(theme)

export const ThemeProvider = ({ value = theme, children }) => {
  return <ThemeContext.Provider value={{ ...theme, ...value }}>{children}</ThemeContext.Provider>
}
