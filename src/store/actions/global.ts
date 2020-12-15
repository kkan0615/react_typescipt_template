import { ISnackbar } from '@/types/snackbar'

export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const ADD_SNACKBAR = 'ADD_SNACKBAR'
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR'
export const OPEN_LOADING = 'OPEN_LOADING'
export const CLOSE_LOADING = 'CLOSE_LOADING'

export interface IGlobalState {
  drawer: boolean
  snackbars: Array<ISnackbar>
  loading: boolean
}

export const initState: IGlobalState = {
  drawer: true,
  snackbars: [],
  loading: false,
}

export const globalActions = {
  openDrawer: () => ({
    type: OPEN_DRAWER,
    drawer: true,
  }),
  closeDrawer: () => ({
    type: CLOSE_DRAWER,
    drawer: false,
  }),
  openLoading: () => ({
    type: OPEN_LOADING,
    loading: true,
  }),
  closeLoading: () => ({
    type: CLOSE_LOADING,
    loading: false,
  }),
  addSnackbar: (snackbar: ISnackbar) => ({
    type: ADD_SNACKBAR,
    payload: snackbar,
  }),
  removeSnackbar: (snackbar: ISnackbar) => ({
    type: REMOVE_SNACKBAR,
    payload: snackbar,
  }),
}

export interface DrawerGlobalActionType {
  type: typeof OPEN_DRAWER | typeof CLOSE_DRAWER
  payload: boolean
}

export interface SnackbarGlobalActionType {
  type: typeof ADD_SNACKBAR | typeof REMOVE_SNACKBAR
  payload: ISnackbar
}

export interface LoadingGlobalActionType {
  type: typeof OPEN_LOADING | typeof CLOSE_LOADING
  payload: boolean
}

export type IGlobalActions = DrawerGlobalActionType
| SnackbarGlobalActionType
| LoadingGlobalActionType
