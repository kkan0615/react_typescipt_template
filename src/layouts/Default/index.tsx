import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { RootState } from '../../store'
import { globalActions } from '../../store/actions/global'
import DrawerLayout from './components/drawer'

const drawerWidth = '17em'

// const mapStateToProps = (state: RootState) => ({
//   drawer: state,
// })
// const mapDispatchToProps = { globalActions }

const DefaultLayout: React.FC = props => {
  const { children } = props

  const useStyles = makeStyles(theme => ({
    appBar: {
      background: theme.palette.background.default,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      // background: theme.palette.background.default,
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    content: {
      padding: theme.spacing(4, 6, 0),
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      padding: theme.spacing(4, 6, 0),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }))
  const classes = useStyles()

  // const [drawerOpen, setDrawerOpen] = React.useState(true)
  const dispatch = useDispatch()
  const drawerStatus = useSelector<RootState>(store => store.global.drawer) as boolean

  console.log(drawerStatus)
  const handleDrawerState = () => {
    // setDrawerOpen(!drawerOpen)
    if (drawerStatus) dispatch(globalActions.closeDrawer())
    else dispatch(globalActions.openDrawer())
  }

  return (
    <div>
      <AppBar
        className={drawerStatus ? classes.appBarShift : classes.appBar}
        elevation={0}
        position="relative"
        variant="elevation"
      >
        <Toolbar
          variant="dense"
        >
          <IconButton
            onClick={handleDrawerState}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerLayout
        open={drawerStatus}
        width={drawerWidth}
      />
      <main className={drawerStatus ? classes.contentShift : classes.content}>
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(DefaultLayout)
