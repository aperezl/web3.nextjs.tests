import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark.css'

function MyApp ({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Test Blog</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
