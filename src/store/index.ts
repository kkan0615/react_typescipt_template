import { combineReducers, createStore } from 'redux'
import { reducer as globalReducer } from './reducer/global'
import { IGlobalState } from './actions/global'

export const rootReducer = combineReducers({
  global: globalReducer,
})

export type RootState = ReturnType<typeof rootReducer>

/**
 * Create store configure with root
 *
 * */
export default function configureStore() {
  // window 를 any 로 강제 캐스팅
  const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  return createStore(rootReducer, devTools && devTools())
}
