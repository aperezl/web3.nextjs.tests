import Link from 'next/link'

export default function Header () {
  return (
    <header className='border-b border-gray-100 drop-shadow-sm sticky top-0 bg-white z-10'>
      <div className='max-w-screen-xl mx-auto py-5 px-5 md:px-0'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-xl cursor-pointer'>
            {'{'} antonio : <span className='text-[#2c682c]'>'perez'</span>{' '}
            {'}'}
          </h1>
          <div className='hidden md:block'>
            <ul className='flex items-center space-x-5 text-gray-500 font-semibold'>
              <li>
                <Link href='#'>
                  <a>Author</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Articles</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className='bg-indigo-600 text-white rounded-lg px-4 py-2'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
