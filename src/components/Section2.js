import PostMD from './PostMD'

export default function Section2 ({ posts }) {
  return (
    <section className='max-w-screen-xl mx-auto px-5 py-5 md:py-20'>
      <h1 className='text-3xl font-medium text-gray-800 mb-10'>
        Latest Blog Posts
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20'>
        {/* Start: Component para cada post */}
        {posts.map(post => (
          <PostMD key={post.slug} post={post} />
        ))}

        {/* End: Component para cada post */}
      </div>
    </section>
  )
}
