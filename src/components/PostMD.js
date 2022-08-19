import Link from 'next/link'

export default function PostMD ({ post }) {
  return (
    <>
      <Link href={`/posts/${post.slug}`}>
        <a className='group space-y-3'>
          <div className='overflow-hidden rounded-lg drop-shadow-lg'>
            <img
              src='/images/img1.png'
              alt='alt'
              className='duration-300 ease-in group-hover:scale-110'
            />
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-gray-900 opacity-10 group-hover:opacity-60 duration-800 transition ease-in'></div>
          </div>
          <div className='flex items-center text-sm'>
            <div className='text-indigo-600'>
              {post.tags.map(tag => (
                // <Link href={`/tags/${tag}`}>
                //   {tag}
                // </Link>
                <span key={tag}>-</span>
              ))}
            </div>
            <div>&nbsp;&nbsp;·&nbsp;&nbsp;</div>
            <div className=''>5 min read</div>
          </div>
          <h2 className='text-2xl md:text-3xl text-gray-800 font-semibold mb-5'>
            {post.title}
          </h2>
          <p className='text-sm md:text-base text-gray-600 mb-5'>
            {post.excerpt}
          </p>
          <div className='text-lg text-gray-600 flex items-center space-x-2'></div>
        </a>
      </Link>
    </>
  )
}
