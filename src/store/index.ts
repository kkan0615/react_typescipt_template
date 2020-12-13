import { combineReducers, createStore } from 'redux'
import { reducer as globalReducer } from './reducer/global'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  return createStore(rootReducer, devTools && devTools())
}
