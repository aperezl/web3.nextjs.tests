import Link from 'next/link'

function Tags ({ tags } = {}) {
  return (
    <>
      {tags.map(tag => (
        <Link key={tag} href={`/tags/${tag}`}>
          {tag}
        </Link>
      ))}
    </>
  )
}

export default function PostMD ({ post }) {
  return (
    <>
      <div className='group space-y-3'>
        <Link href={`/posts/${post.slug}`}>
          <div className='overflow-hidden cursor-pointer rounded-lg drop-shadow-lg'>
            <img
              src='/images/img1.png'
              alt='alt'
              className='duration-300 ease-in group-hover:scale-110'
            />
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-gray-900 opacity-10 group-hover:opacity-60 duration-800 transition ease-in'></div>
          </div>
        </Link>
        <div className='flex items-center text-sm'>
          <div className='text-indigo-600'></div>
          <Tags tags={post.tags} />

          <div>&nbsp;&nbsp;·&nbsp;&nbsp;</div>
          <div className=''>5 min read</div>
        </div>

        <h2 className='text-2xl md:text-3xl text-gray-800 font-semibold mb-5'>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className='text-sm md:text-base text-gray-600 mb-5'>
          {post.excerpt}
        </p>
        <div className='text-lg text-gray-600 flex items-center space-x-2'></div>
      </div>
    </>
  )
}
