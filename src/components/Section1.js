import Link from 'next/link'

export default function Section1 ({ post }) {
  return (
    <section className='bg-gray-50 px-5 py-10 md:py-32'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20 md:gap-y-0 items-center'>
          <div>
            <div className='overflow-hidden rounded-lg drop-shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='alt'
                className='duration-300 ease-in group-hover:scale-110'
              />
              <div className='absolute top-0 left-0 bottom-0 right-0 bg-gray-900 opacity-10 group-hover:opacity-60 duration-800 transition ease-in'></div>
            </div>
          </div>
          <div>
            <Link href='#' className='space-y-3 text-sm'>
              <a>
                <div className='flex items-center text-sm'>
                  <div className='text-indigo-600'>Management</div>
                  <div>&nbsp;&nbsp;·&nbsp;&nbsp;</div>
                  <div className=''>5 min read</div>
                </div>
                <h2 className='text-2xl md:text-4xl text-gray-900 font-semibold mb-5'>
                  Exercitation do magna do sunt sint excepteur fugiat amet
                  cupidatat.
                </h2>
                <p className='text-sm md:text-lg text-gray-600 mb-5'>
                  Aliqua ullamco officia mollit exercitation incididunt sit
                  Lorem. Labore aliqua in esse magna ea non consequat laborum
                  consectetur. Laboris quis adipisicing laborum incididunt
                  fugiat magna amet amet irure quis.
                </p>
                <div className='text-lg text-gray-600 flex items-center space-x-2'>
                  <div>Read Article</div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
