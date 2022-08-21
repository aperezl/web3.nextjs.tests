export default function Youtube ({ id }) {
  return (
    <div className='max-w-5xl'>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow='autoplay; encrypted-media'
        title='Embedded Youtube Video'
        className='max-w-screen-xl mx-auto'
      ></iframe>
    </div>
  )
}
