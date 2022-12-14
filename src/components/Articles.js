import Link from 'next/link'

export default function Articles ({ posts }) {
  return (
    <>
      <ul className=''>
        {posts.map(post => (
          <li key={post.slug}>
            <div className=''>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
            <p>{post.excerpt}</p>
            <p className=''>
              {post.tags.map(tag => (
                <Link key={tag} href={`/tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
