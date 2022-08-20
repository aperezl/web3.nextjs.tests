import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='bg-gray-100 border-t border-gray-300 px-4'>
      <div className='max-w-screen-lg mx-auto py-5 md:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-12 py-5 space-y-10 md:space-y-0'>
          <div className='md:col-span-4'>
            <Link href='#'>
              <a className='mb-5'>
                <img
                  className='w-56'
                  alt='logo'
                  src='https://imgs.search.brave.com/sDdwSP7CqSsiVR9qYjnTcSQdSnc9Ch8Ss7DVRRovBgw/rs:fit:1200:680:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvbm9k/ZWpzLWxvZ28tcG5n/LXRyYW5zcGFyZW50/LnBuZw'
                />
              </a>
            </Link>
            <p className='text-gray-400 mt-5'>
              Bring your ideas alive.
              <br />
              Feel the sunshine.
            </p>
          </div>
          <div className='md:col-span-2 flex flex-col space-y-2'>
            <h5 className='text-indigo-600 font-bold mb-2'>Blog</h5>
            <Link href='#'>
              <a className='text-gray-800'>All posts</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>About</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>Contact</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>Term &amp; Conditions</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>Privacy Policy</a>
            </Link>
          </div>
          <div className='md:col-span-2 flex flex-col space-y-2'>
            <h5 className='text-indigo-600 font-bold mb-2'>Admin</h5>
            <Link href='#'>
              <a className='text-gray-800'>Style Guide</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>Licenses</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>Instructions</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>Password</a>
            </Link>
            <Link href='#'>
              <a className='text-gray-800'>404</a>
            </Link>
          </div>
          <div className='md:col-span-4'>
            <h5 className='text-indigo-600 font-bold mb-2'>Subscribe</h5>
            <p className='text-gray-800 mb-5'>
              Sign up for the Frequency Blog.
              <br />
              Get the latest news, company insights, and Frequency updates.
            </p>
            <div className='bg-white rounded-lg border border-gray-300'>
              <div className='flex justify-between md:flex-row'>
                <input
                  type='email'
                  className='m-1 p-3 md:w-96 appearance-none border-none text-gray-700 text-sm font-medium focus:outline-none focus:rounded focus:placeholder-transparent'
                  placeholder='Enter your email'
                  aria-label='Enter your email'
                />
                <button className='w-full text-sm m-1 p-2 bg-gray-800 rounded-lg font-semibold lg:w-auto hover:bg-gray-700 text-white'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full border-b border-gray-200 my-5'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 py-5'>
          <div className='hidden md:block md:col-span-7 text-gray-600'>
            &copy; All Rights Reserved.
          </div>
          <div className='md:col-span-5'>
            <div className='flex items-center md:justify-end'>
              <div className='text-gray-600 mr-2'>Follow Us:</div>
              <div className='flex justify-between items-center space-x-2'>
                ---
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
