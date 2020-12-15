import React from 'react'
import {
  Route, Switch,
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { routerConfigs } from './modules/sample'
import DefaultLayout from '../layouts/Default/index'
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
      <Switch>
        <Route path={samplePaths}>
          <DefaultLayout>
            {/* <Route exact path="/Home" component={Home} /> */}
            <Switch>
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
