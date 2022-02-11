import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'src/styles/globals.css'
import { LetterContextProvider } from 'src/hooks/useLetter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LetterContextProvider>
      <Head>
        <title>Palavreco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </LetterContextProvider>
  )
}

export default MyApp
