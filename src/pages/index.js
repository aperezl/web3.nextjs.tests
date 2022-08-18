import { getAllPosts } from '../lib/posts'

export default function Home ({ posts }) {
  return (
    <>
      <h1>Article</h1>
      <ul>
        {posts.map(posts => (
          <li key={posts.slug}>{posts.title}</li>
        ))}
      </ul>
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
