import { apiClient } from '../../modules/apiClient'
import { InferGetStaticPropsType, GetStaticPaths, GetStaticPropsContext } from 'next'
import React from 'react'

export const getStaticProps = async (context: GetStaticPropsContext<{id: string}>) => {
  const { id } = context.params

  const article = await apiClient.articles._cmsId(id).$get()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await apiClient.articles.$get()).contents.map(article => {
      return {
        params: {
          id: article.id
        }
      }
    }),
    fallback: true
  }
}

const ArticleDetail = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>
        { article.title }
      </h1>
      <p>
        { article.body }
      </p>
    </div>
  )
}

export default ArticleDetail

