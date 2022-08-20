import Articles from '../components/Articles'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import { getAllPosts } from '../lib/posts'

export default function Home ({ posts }) {
  const [mainPost, ...otherPosts] = posts
  return (
    <>
      <Header />
      <Section1 post={mainPost} />
      <Section2 posts={otherPosts} />
      <h1>Article</h1>
      {/* <Articles posts={posts} /> */}
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
