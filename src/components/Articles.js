import Link from 'next/link'
import styles from '../styles/Articles.module.css'

export default function Articles ({ posts }) {
  return (
    <>
      <ul className={styles.list}>
        {posts.map(post => (
          <li key={post.slug}>
            <div className={styles.title}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
