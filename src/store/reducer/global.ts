import {
  CLOSE_DRAWER,
  IGlobalActions,
  IGlobalState,
  initState,
  OPEN_DRAWER,
  ADD_SNACKBAR,
  REMOVE_SNACKBAR,
  OPEN_LOADING,
  CLOSE_LOADING,
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
    case OPEN_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CLOSE_LOADING:
      return {
        ...state,
        loading: false,
      }
    case ADD_SNACKBAR:
      return {
        ...state,
        snackbars: [...state.snackbars, action.payload],
      }
    case REMOVE_SNACKBAR:
      return {
        ...state,
        snackbars: state.snackbars.splice(state.snackbars.indexOf(action.payload), 1),
      }
    default:
      return state
  }
}
