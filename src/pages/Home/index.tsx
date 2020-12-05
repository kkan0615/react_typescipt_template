import React, { useContext } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { ThemeContext } from '../../themes/ThemeProvider'

const Home: React.FC = () => {
  const setThemeName = useContext(ThemeContext)

  const useStyles = makeStyles(theme => ({
    root: {
      background: theme.palette.background.default,
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

export default Home
