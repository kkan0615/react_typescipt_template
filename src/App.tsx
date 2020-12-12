import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Provider } from 'react-redux'
import configureStore from './store'
import RouterIndex from './router/index'

const App: React.FC = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: theme.palette.background.default,
    },
  }))

  const classes = useStyles()

  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </Provider>
  )
}

export default App
