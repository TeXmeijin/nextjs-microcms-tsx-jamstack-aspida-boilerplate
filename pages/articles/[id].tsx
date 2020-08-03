import { apiClient } from '../../modules/apiClient'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import { MicroCmsArticle } from '../../types/microcms/type'

export const getStaticProps: GetStaticProps = async (context): Promise<{props: { data: MicroCmsArticle }}> => {
  const { id } = context.params

  const data = await apiClient.articles._cmsId(`${id}`).$get()

  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'rrsawgjoo' } },
    ],
    fallback: true
  }
}

const ArticleDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  if (!data) {
    return (
      <div>
        loading...
      </div>
    )
  }

  return (
    <div>
      <h1>
        {data.title}
      </h1>
    </div>
  )
}

export default ArticleDetail

