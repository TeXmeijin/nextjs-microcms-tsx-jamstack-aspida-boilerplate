import { MicroCmsArticle } from '../../types/microcms/type'
import Link from 'next/link'

type Props = {
  article: MicroCmsArticle
}

const ArticleListItem = (props: Props) => {
  const href = `/articles/${props.article.id}`
  return (
    <Link href="/articles/[id]" as={href} passHref>
      {/* for SEO, a tag should be set title attr. */}
      <a title={props.article.title}>
        { props.article.title }
      </a>
    </Link>
  )
}

export default ArticleListItem