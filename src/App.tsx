import React from 'react'
import {
  BrowserRouter, Route, Link, Switch,
} from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'
import DefaultLayout from './layouts/default'
import Test from './pages/Test/index'
import Clocks from './pages/Clocks/index'
import Home from './pages/Home'

const App: React.FC = () => {
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
        >
          test
        </Button>
        <Link to="/">Home</Link>
        <Link to="/Test">Test</Link>
        <Link to="/Clocks">Clocks</Link>
        <Link to="/Home">
          <Button>
            Home
          </Button>
        </Link>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Test" component={Test} />
          <Route path={['/Clocks']}>
            <DefaultLayout>
              <Switch>
                <Route path="/Clocks" component={Clocks} />
              </Switch>
            </DefaultLayout>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
