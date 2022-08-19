import Image from 'next/image'
import { useRouter } from 'next/router'

export default function PostImage ({ src, width, height }) {
  const { query } = useRouter()
  return (
    <Image src={`/images/${query.slug}/${src}`} width={width} height={height} />
  )
}
