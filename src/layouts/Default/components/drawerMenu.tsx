import React from 'react'
import { Link, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import { ExtendedRouteConfig } from '@/types/routerConfig'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'

export interface IProps {
  router: ExtendedRouteConfig
}

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const DrawerMenu: React.FC<IProps> = props => {
  /* Props */
  const { router } = props
  /* Classes from material ui */
  const classes = useStyles()
  /* States */
  const [open, setOpen] = React.useState(false)

  const handleOpenStatus = () => {
    setOpen(!open)
  }

  const childMenuList = (router.childrenRoutes || []).map(child => (
    <ListItem
      button
      component={Link}
      to={child.path}
      className={classes.nested}
    >
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={child.title} />
    </ListItem>
  ))

  return (
    <div>
      <ListItem button onClick={handleOpenStatus}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={router.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {childMenuList}
        </List>
      </Collapse>
    </div>
  )
}

export default DrawerMenu
