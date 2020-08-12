import { apiClient } from '../../modules/apiClient'
import {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticProps
} from 'next'
import React from 'react'
import { MicroCmsArticle } from '../../types/microcms/type'
import { useRouter } from 'next/router'
import Loading from '../../components/parts/loading/Loading'
import Head from 'next/head'

export const getStaticProps: GetStaticProps<{ article: MicroCmsArticle }> = async (context: GetStaticPropsContext<{id: string}>) => {
  const { id } = context.params

  const article = await apiClient.articles._cmsId(id).$get()

  return {
    props: {
      article,
    },
    revalidate: 1,
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
    fallback: true,
  }
}

const ArticleDetail = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return Loading
  }

  const createMarkUp = () => {
    return { __html: article.body }
  }
  return (
    <div>
      <Head>
        <title>{ article.title }</title>
      </Head>
      <h1>
        { article.title }
      </h1>
      <div dangerouslySetInnerHTML={ createMarkUp() }>
      </div>
    </div>
  )
}

export default ArticleDetail

