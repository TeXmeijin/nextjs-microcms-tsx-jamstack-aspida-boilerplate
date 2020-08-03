import { MicroCmsRequest, MicroCmsArticle } from '../../../microcms/type'
export interface Methods {
  get: {
    query: MicroCmsRequest
    resBody: MicroCmsArticle
  }
}
