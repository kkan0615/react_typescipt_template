import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { RootState } from '../../store'
import { globalActions } from '../../store/actions/global'
import DrawerLayout from './components/drawer'
import Snackbar from '../../components/common/Snackbar'
import Loading from '../../components/common/Loading'

const drawerWidth = '17em'

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
      background: theme.palette.background.default,
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

  const dispatch = useDispatch()
  const drawerStatus = useSelector<RootState>(store => store.global.drawer) as boolean

  useEffect(() => {
    dispatch(globalActions.openLoading())
    setTimeout(() => {
      dispatch(globalActions.closeLoading())
    }, 1000)
  }, [dispatch])

  const handleDrawerState = () => {
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
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerLayout
        open={drawerStatus}
        width={drawerWidth}
      />
      <Loading />
      <Snackbar />
      <main className={drawerStatus ? classes.contentShift : classes.content}>
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout
