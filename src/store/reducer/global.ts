import {
  CLOSE_DRAWER,
  GlobalActions, initState, OPEN_DRAWER,
} from '../actions/global'

export const reducer = (state = initState, action: GlobalActions): any => {
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
    default:
      return state
  }
}
