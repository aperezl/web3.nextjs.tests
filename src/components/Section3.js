export default function Section3 () {
  return (
    <section className='relative bg-gray-800 py-20 drop-shadow-lg md:px-0'>
      <div className='max-w-screen-xl m-auto'>
        <div className='text-center text-white space-x-10'>
          <h2 className='text-2xl md:text-4xl font-bold'>
            Get our weekly email
          </h2>
          <p className='text-sm md:text-lg'>
            In cillum culpa anim in amet aliqua mollit irure consectetur ad.
            Tempor aliquip voluptate officia nostrud ex veniam ad dolore
            adipisicing.
          </p>
          <div className='email-sign-up padding-top w-form'>
            <form className='m-4 flex items-center justify-center'>
              <input
                className='shadow rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
                placeholder='your@mail.com'
              />
              <button className='shadow px-8 rounded-r-lg gb-gray-900 border-gray-900 text-white font-bold p-4 uppercase border-t border-b border-r'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
