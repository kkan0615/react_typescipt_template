import React, { useContext } from 'react'
import {
  BrowserRouter, Route, Link, Switch,
} from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'
import { ThemeContext } from './themes/ThemeProvider'
import Test from './pages/Test/index'
import Clocks from './pages/Clocks/index'

const App: React.FC = () => {
  // Get the setter function from context
  const setThemeName = useContext(ThemeContext)

  const useStyles = makeStyles(theme => ({
    root: {
      background: theme.palette.background.default,
    },
  }))

  const classes = useStyles()

  return (
    <BrowserRouter>
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
        <Link to="/">Home</Link>
        <Link to="/Test">Test</Link>
        <Link to="/Clocks">Clocks</Link>
        <Switch>
          <Route path="/Test" component={Test} />
          <Route path="/Clocks" component={Clocks} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
