import Head from 'next/head'
import Articles from '../../components/Articles'
import Section4, { TagPost } from '../../components/Section4'
import { getAllPosts } from '../../lib/posts'

export default function TagPage ({ posts, slug }) {
  const title = `Tag: ${slug}`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className='bg-[#ecf1ea] px-5 py-10 md:py-32 post'>
        <div className='max-w-screen-xl mx-auto'>
          <h1>Tag: {slug}</h1>
          {posts.map(post => (
            <TagPost post={post} />
          ))}
        </div>
      </section>
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
