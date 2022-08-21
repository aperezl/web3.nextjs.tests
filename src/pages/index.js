import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import { getAllPosts } from '../lib/posts'

export default function Home ({ posts }) {
  const [mainPost, ...otherPosts] = posts
  return (
    <>
      <Hero />
      <Section1 post={mainPost} />
      <Section2 posts={otherPosts} />
      <Section3 />
      <Section4 />
      {/* <h1>Article</h1> */}
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
