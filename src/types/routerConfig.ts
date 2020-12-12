/**
 * _id - from mongoDB
 * name - name of router
 * component - import from tsx
 * path - path of router, ex) test/test2
 * children - Array of Routers
 */
export interface RouterConfig {
  _id: string
  name: string
  component: string
  path: string
  children: Array<RouterConfig>
}
