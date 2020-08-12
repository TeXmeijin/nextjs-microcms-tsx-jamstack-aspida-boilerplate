import { MicroCmsArticle } from '../../../microcms/type'
import { mockMethods } from 'aspida-mock/dist'
export interface Methods {
  get: {
    resBody: MicroCmsArticle
  }
}

export default mockMethods<Methods>({
  get: ({ query, reqHeaders, reqBody }) => ({
    status: 200,
    resHeaders: {},
    resBody: {
      title: 'title mock',
      description: 'description mock',
      body: 'body mock',
      id: 'XXXX',
      createdAt: '2020-08-09T13:49:53.413Z',
      updatedAt: '2020-08-09T13:49:53.413Z',
      publishedAt: '2020-08-09T13:49:53.413Z',
    }
  })
})