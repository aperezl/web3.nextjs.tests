import Link from 'next/link'

export function FeaturedPost () {
  return (
    <div className='mt-5'>
      <div>
        <div>
          <Link href='#'>
            <a className='grid grid-cols-2'>
              <div className='h-full flex flex-1 flex-col justify-center space-y-2 mr-10'>
                <div className='uppercase text-indigo-600 font-semibold'>
                  Category
                </div>
                <h4 className='font-semibold text-gray-900 text-lg'>
                  Officia nulla consequat dolor cillum excepteur commodo
                  excepteur nulla sunt.
                </h4>
                <p className='text-sm text-gray-600'>
                  Lorem nostrud pariatur culpa sint Lorem sint quis veniam
                  cillum eu amet fugiat laborum.
                </p>
                <div className='flex items-center text-gray-500 text-sm space-x-1'>
                  <div>Read more</div>
                </div>
              </div>
              <img
                src='/images/img1.png'
                alt=''
                className='rounded-lg h-48 w-full object-cover object-center'
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function TagPost ({ post }) {
  console.log({ post })
  return (
    <div className='mt-5'>
      <div>
        <div>
          <Link href='#'>
            <a className='grid grid-cols-12'>
              <div className='h-full flex flex-1 flex-col justify-center space-y-2 mr-10 col-span-6 col-start-2'>
                <div className='uppercase text-indigo-600 font-semibold'>
                  Category
                </div>
                <h4 className='font-semibold text-gray-900 text-lg'>
                  {post.title}
                </h4>
                <p className='text-sm text-gray-600'>{post.excerpt}</p>
                <div className='flex items-center text-gray-500 text-sm space-x-1'>
                  <div>Read more</div>
                </div>
              </div>
              <img
                src={
                  post.image
                    ? `/images/${post.slug}/${post.image}`
                    : '/images/img1.png'
                }
                alt=''
                className='rounded-lg col-span-2 col-end-11 object-cover'
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Section4 () {
  return (
    <div className='max-w-screen-xl mx-auto py-20 px-5 md:px-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 space-y-10 md:space-y-0'>
        <div>
          <div>
            <Link href='#'>
              <a className='inline-block'>
                <img
                  src='/images/img1.png'
                  alt=''
                  className='rounded-lg h-96 w-full object-cover object-center'
                />
                <div className='space-y-5 py-5'>
                  <div className='flex items-center text-sm'>
                    <div className='text-indigo-600'>Managment</div>
                    <div>&nbsp;&nbsp;·&nbsp;&nbsp;</div>
                    <div className=''>5 min read</div>
                  </div>
                  <h3 className='text-xl md:text-3xl font-bold'>
                    7 of the Best Examples of Beatiful Blog
                  </h3>
                  <p className='text-sm md:text-xl text-gray-600'>
                    Eu ullamco quis officia et ullamco qui excepteur. Irure sit
                    laborum nisi laborum cillum. Sunt voluptate irure Lorem eu
                    officia non consequat aute occaecat.
                  </p>
                  <div className='flex items-center text-gray-500 uppercase text-sm space-x-2'>
                    <div className='uppercase'>Antonio Perez</div>
                    <div className='spacer-dot'>·</div>
                    <div>SEP 20, 2030</div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className=''>
          <h4 className='font-bold text-lg mb-2'>Featured</h4>
          <FeaturedPost />
          <FeaturedPost />
          <FeaturedPost />
        </div>
      </div>
    </div>
  )
}
