import Articles from '../components/Articles'
import { getAllPosts } from '../lib/posts'

export default function Home ({ posts }) {
  return (
    <>
      <h1>Article</h1>
      <Articles posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts()
    .slice(0, 9)
    .map(post => post.meta)
  return {
    props: { posts }
  }
}
