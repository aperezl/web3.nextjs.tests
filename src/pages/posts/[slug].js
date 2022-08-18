import Head from 'next/head'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { getPostFromSlug, getSlugs } from '../../lib/posts'
import Youtube from '../../components/Youtube'

export default function PostPage ({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <h1>{post.meta.title}</h1>
      <MDXRemote {...post.source} components={{ Youtube, Image }} />
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = getSlugs().map(slug => ({ params: { slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const { content, meta } = getPostFromSlug(slug)
  const mdxSource = await serialize(content)
  return {
    props: {
      post: { source: mdxSource, meta }
    }
  }
}
