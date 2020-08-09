import Head from 'next/head'
import { apiClient } from '../modules/apiClient'
import {
  GetStaticProps,
  InferGetStaticPropsType
} from 'next'
import ArticleListItem from '../components/article/ArticleListItem'
import { MicroCmsArticle } from '../types/microcms/type'

export const getStaticProps: GetStaticProps<{articles: MicroCmsArticle[]}> = async () => {
  const articles = (await apiClient.articles.$get()).contents

  return {
    props: {
      articles,
    },
    revalidate: 1,
  }
}

const Home = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Top Page</title>
      </Head>
      <h1>Top Page</h1>
      {articles.map(article => {
        return (
          <ArticleListItem article={article} key={article.id}></ArticleListItem>
        )
      })}
    </div>
  )
}

export default Home