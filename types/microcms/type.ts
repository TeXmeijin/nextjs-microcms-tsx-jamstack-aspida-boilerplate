export type MicroCmsArticle = MicroCmsIdentity & MicroCmsArticleCntent

type MicroCmsIdentity = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

type MicroCmsArticleCntent = {
  title: string
  description: string
  body: string
}

export type MicroCmsRequest = {
  fields?: string
  limit?: number
  filters?: string
  draftKey?: string
}
