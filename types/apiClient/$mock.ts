/* eslint-disable */
import { MockClient, MockConfig } from 'aspida-mock'
import api from './$api'
import mock0 from './articles/index'
import mock1 from './articles/_cmsId@string/index'

export const mockRoutes = () => [
  { path: '/articles', methods: mock0 },
  { path: '/articles/_cmsId@string', methods: mock1 }
]

export default <U>(client: MockClient<U>, config?: MockConfig) => {
  client.attachRoutes(mockRoutes(), config)

  return api(client)
}
