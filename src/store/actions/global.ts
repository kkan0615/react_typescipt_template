export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'

export interface IGlobalState {
  drawer: boolean
}

export const initState: IGlobalState = {
  drawer: true,
}

export interface GlobalActions {
  type: string
  payload: IGlobalState
}

export const globalActions = {
  openDrawer: ():GlobalActions => ({
    type: OPEN_DRAWER,
    payload: {
      drawer: true,
    },
  }),
  closeDrawer: (): GlobalActions => ({
    type: CLOSE_DRAWER,
    payload: {
      drawer: false,
    },
  }),
}
