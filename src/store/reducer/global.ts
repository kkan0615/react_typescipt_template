import {
  CLOSE_DRAWER,
  IGlobalActions, IGlobalState, initState, OPEN_DRAWER, ADD_SNACKBAR, REMOVE_SNACKBAR,
} from '../actions/global'

export const reducer = (state = initState, action: IGlobalActions): IGlobalState => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        drawer: true,
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        drawer: false,
      }
    case ADD_SNACKBAR:
      return {
        ...state,
      }
    case REMOVE_SNACKBAR:
      return {
        ...state,
      }
    default:
      return state
  }
}
