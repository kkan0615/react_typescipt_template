import React, { useContext } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { ThemeContext } from './themes/ThemeProvider'

const App: React.FC = () => {
  // Get the setter function from context
  const setThemeName = useContext(ThemeContext)

  const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      background: theme.palette.background.default,
    },
    menuIconButton: {
      marginRight: theme.spacing(2),
    },
    menuTitle: {
      flexGrow: 5,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      flexGrow: 1,
      display: 'flex',
    },
  }))

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeName('lightTheme')}
      >
        Set Light Theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setThemeName('darkTheme')}
      >
        Set Dark Theme
      </Button>

      <Button
        variant="contained"
      >
        test
      </Button>
    </div>
  )
}

export default App
