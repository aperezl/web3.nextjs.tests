export default function Youtube ({ id }) {
  return (
    <div className=''>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow='autoplay; encrypted-media'
        title='Embedded Youtube Video'
        className=''
      ></iframe>
    </div>
  )
}
