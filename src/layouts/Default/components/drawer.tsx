import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
// import RouterIndex from './router/index'
import Drawer from '@material-ui/core/Drawer'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import EmailIcon from '@material-ui/icons/Email'

interface IProps {
  open: boolean
  width: string
}

const DrawerLayout: React.FC<IProps> = props => {
  const useStyles = makeStyles(theme => ({
    drawer: {
      background: theme.palette.secondary.main,
    },
    drawerPaper: {
      background: theme.palette.secondary.main,
    },
  }))

  const classes = useStyles()
  const { open, width } = props

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div
        style={{ width }}
      >
        DrawerDrawer
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={(
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          )}
        >
          <ListItem
            button
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Test"
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Test" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Clocks"
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Clocks" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default DrawerLayout
