import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Test Blog</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
