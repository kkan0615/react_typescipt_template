import { ISnackbar } from '@/types/snackbar'

export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const ADD_SNACKBAR = 'ADD_SNACKBAR'
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR'

export interface IGlobalState {
  drawer: boolean
  snackbars: Array<ISnackbar>
}

export const initState: IGlobalState = {
  drawer: true,
  snackbars: [],
}

// export interface IPayload {
//   drawer: boolean,
//   snackbar: ISnackbar
// }

export interface IGlobalActions {
  type: string
  payload: IGlobalState
}

export const globalActions = {
  openDrawer: () => ({
    type: OPEN_DRAWER,
    payload: {
      drawer: true,
    },
  }),
  closeDrawer: () => ({
    type: CLOSE_DRAWER,
    payload: {
      drawer: false,
    },
  }),
  addSnackbar: (snackbars: Array<ISnackbar>) => ({
    type: ADD_SNACKBAR,
    payload: {
      snackbars,
    },
  }),
  removeSnackbar: (snackbars: Array<ISnackbar>) => ({
    type: REMOVE_SNACKBAR,
    payload: {
      snackbars,
    },
  }),

}
