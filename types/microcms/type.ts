export type MicroCmsArticle = MicroCmsIdentity & MicroCmsArticleCntent & MicroCmsImage

type MicroCmsImage = {
  // サムネ
  image_url: {
    url: string
  }
}

type MicroCmsIdentity = {
  id: string
  createdAt: string
  updatedAt: string
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
