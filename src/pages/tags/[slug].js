import Head from 'next/head'
import Articles from '../../components/Articles'
import { getAllPosts } from '../../lib/posts'

export default function TagPage ({ posts, slug }) {
  const title = `Tag: ${slug}`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Tag: {slug}</h1>
      <Articles posts={posts} />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = getAllPosts()
  const tags = new Set(posts.map(post => post.meta.tags).flat())
  const paths = Array.from(tags).map(tag => ({ params: { slug: tag } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const posts = getAllPosts().filter(post => post.meta.tags.includes(slug))

  return {
    props: { posts: posts.map(post => post.meta), slug }
  }
}
