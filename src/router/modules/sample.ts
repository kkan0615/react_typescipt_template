import { ExtendedRouteConfig } from '@/types/routerConfig'

import Clocks from '../../pages/Clocks/index'
import Home from '../../pages/Home/index'
import Test from '../../pages/Test/index'
import Snackbar from '../../pages/Snackbar/index'

export const DEFAULT_HOME_PATH = '/home'

export const routerConfigs: Array<ExtendedRouteConfig> = [
  {
    _id: '5fd5af452135c64818ab9602',
    title: 'Home',
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    _id: '5fd5b02ce03968d7569cf828',
    title: 'Clocks',
    name: 'clocks',
    path: '/clocks',
    component: Clocks,
  },
  {
    _id: '5fd5b0308f575329028b6b56',
    title: 'Test',
    name: 'test',
    path: '/test',
    component: Test,
  },
  {
    _id: '5fd5b0308f575329028b6b56',
    title: 'Snackbar',
    name: 'snackbar',
    path: '/snackbar',
    component: Snackbar,
  },
]

export const sampleRouterConfig: ExtendedRouteConfig = {
  _id: '5fd62b0330fc92b2d38a1ea5',
  title: 'Sample',
  name: 'Sample',
  path: '',
  childrenRoutes: routerConfigs,
}
