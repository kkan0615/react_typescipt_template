import React from 'react'
import {
  Route, Link, Switch,
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { routerConfigs } from './modules/sample'
import DefaultLayout from '../layouts/Default/index'
import Home from '../pages/Home'
import NotFound from '../pages/Error/404/index'

const RouterIndex: React.FC = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: theme.palette.background.default,
    },
  }))

  const classes = useStyles()

  const samplePaths = routerConfigs.map(router => router.path)

  const sampleMenus = routerConfigs.map(router => (
    <Route path={router.path} component={router.component} />
  ))

  return (
    <div className={classes.root}>
      {/* <Button */}
      {/*  variant="contained" */}
      {/* > */}
      {/*  test */}
      {/* </Button> */}
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/Test">Test</Link> */}
      {/* <Link to="/Clocks">Clocks</Link> */}
      {/* <Link to="/Home"> */}
      {/*  <Button> */}
      {/*    Home */}
      {/*  </Button> */}
      {/* </Link> */}
      {/* <Link to="/error">To the error~</Link> */}
      <Switch>
        <Route path={samplePaths}>
          <DefaultLayout>
            {/* <Route exact path="/Home" component={Home} /> */}
            <Switch>
              {/* <Route path="/Clocks" component={Clocks} /> */}
              {/* <Route path="/Test" component={Test} /> */}
              {sampleMenus}
            </Switch>
          </DefaultLayout>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default RouterIndex
