import { MicroCmsArticle } from '../../microcms/type'

export interface Methods {
  get: {
    resBody: { contents: MicroCmsArticle[] }
  }
}
