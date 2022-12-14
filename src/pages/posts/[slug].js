import Head from 'next/head'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

import { getPostFromSlug, getSlugs } from '../../lib/posts'
import Youtube from '../../components/Youtube'

import PostImage from '../../components/PostImage'

export default function PostPage ({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <section className='bg-[#ecf1ea] px-5 py-8 post'>
        <div className='max-w-screen-lg mx-auto bg-white p-8 rounded-lg'>
          <h1>{post.meta.title}</h1>
          <MDXRemote
            {...post.source}
            components={{ Youtube, Image, PostImage }}
          />
        </div>
      </section>
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
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
        rehypeHighlight
      ]
    }
  })
  return {
    props: {
      post: { source: mdxSource, meta }
    }
  }
}
