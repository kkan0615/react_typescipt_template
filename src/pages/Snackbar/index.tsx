import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SnackbarMaterial from '@material-ui/core/Snackbar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { RootState } from '../../store'
import { globalActions } from '../../store/actions/global'

const Snackbar: React.FC = () => {
  const dispatch = useDispatch()
  const snackbars = useSelector<RootState>(store => store.global.snackbars) as boolean

  const addBasicSnackbar = () => {
    dispatch(globalActions.addSnackbar({
      _id: '12313124sdafnjksn',
      color: 'blue',
      horizontal: 'right',
      vertical: 'top',
      message: 'hi randome meesage',
    }))
  }

  console.log(snackbars)
  return (
    <Card>
      <CardContent>
        snackbar content will be here
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addBasicSnackbar}>open test snackbar</Button>
      </CardActions>
    </Card>
  )
}

export default Snackbar
