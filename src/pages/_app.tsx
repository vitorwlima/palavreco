import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Palavreco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
