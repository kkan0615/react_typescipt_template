import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SnackbarMaterial from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import { RootState } from '../../../store'
import { ISnackbar } from '../../../types/snackbar'
import { globalActions } from '../../../store/actions/global'

const DEFAULT_VERITCAL = 'top'
const DEFAULT_HORIZONTAL = 'center'
const DEFAULT_TIMEOUT = 2500

const Snackbar: React.FC = () => {
  const dispatch = useDispatch()
  const snackbars = useSelector<RootState>(store => store.global.snackbars) as Array<ISnackbar>

  const removeSnackbar = (snackbar: ISnackbar) => {
    dispatch(globalActions.removeSnackbar(snackbar))
  }

  return (
    <div>
      {
        snackbars.map(snackbar => (
          <SnackbarMaterial
            open
            key={snackbar._id}
            onExit={() => removeSnackbar(snackbar)}
            autoHideDuration={DEFAULT_TIMEOUT}
            action={(
              <Button color="secondary" size="small" onClick={() => removeSnackbar(snackbar)}>
                lorem ipsum dolorem
              </Button>
            )}
            anchorOrigin={{
              vertical: snackbar.vertical || DEFAULT_VERITCAL,
              horizontal: snackbar.horizontal || DEFAULT_HORIZONTAL,
            }}
          />
        ))
      }
    </div>
  )
}

export default Snackbar
