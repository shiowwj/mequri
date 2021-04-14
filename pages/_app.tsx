import type { AppProps } from 'next/app';
import '../styles/globals.css'
import { CurrentSearchResultProvider } from '../hooks/currentSearchResult';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <CurrentSearchResultProvider>
      <Component {...pageProps} />
    </CurrentSearchResultProvider>
  )
}

export default MyApp
