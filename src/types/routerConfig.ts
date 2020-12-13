import { RouteProps } from 'react-router-dom'

/**
 * _id - from mongoDB
 * name - name of router
 * title - title of router
 * childrenRoutes - Array of Routers
 */
export interface ExtendedRouteConfig extends RouteProps {
  _id: string
  icon?: string
  name: string
  title: string
  path: string
  childrenRoutes?: Array<ExtendedRouteConfig>
}
