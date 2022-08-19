import Link from 'next/link'
import Image from 'next/image'
export default function Header () {
  return (
    <header className='border-b border-gray-100 drop-shadow-sm sticky top-0 bg-white z-10'>
      <div className='max-w-screen-xl mx-auto py-5 px-5 md:px-0'>
        <div className='flex items-center justify-between'>
          <div>
            <Image
              width={224}
              height={224}
              layout='responsive'
              className='w-56'
              alt='logo'
              src='https://imgs.search.brave.com/sDdwSP7CqSsiVR9qYjnTcSQdSnc9Ch8Ss7DVRRovBgw/rs:fit:1200:680:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvbm9k/ZWpzLWxvZ28tcG5n/LXRyYW5zcGFyZW50/LnBuZw'
            />
          </div>
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
