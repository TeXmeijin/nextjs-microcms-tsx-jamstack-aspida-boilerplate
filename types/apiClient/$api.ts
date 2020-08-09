/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './articles'
import { Methods as Methods1 } from './articles/_cmsId@string'

const GET = 'GET'
const PATH0 = '/articles'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    articles: {
      _cmsId: (val0: string) => {
        const prefix0 = `${PATH0}/${val0}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body)
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body)
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
