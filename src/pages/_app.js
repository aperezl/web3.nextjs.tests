import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark.css'

function MyApp ({ Component, pageProps }) {
  return (
    <div className='container'>
      <Head>
        <title>Test Blog</title>
      </Head>
      <nav>
        <Link href='/'>/home</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
