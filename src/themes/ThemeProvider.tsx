import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { getThemeByName } from './base'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ThemeContext = React.createContext((themeName: string) => {})

const ThemeProvider: React.FC = props => {
  // State to hold the selected theme name
  const [themeName, setThemeName] = useState('darkTheme')

  useEffect(() => {
    localStorage.setItem('MyThemingApp', themeName)
  }, [themeName])

  const { children } = props

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName)
  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
