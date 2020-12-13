import { SnackbarOrigin } from '@material-ui/core/Snackbar'

export interface ISnackbar extends SnackbarOrigin{
  _id: string
  message: string
  timer?: number
  color?: string
  icon?: string
}
