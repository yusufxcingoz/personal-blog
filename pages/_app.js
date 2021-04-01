import '../styles/global.css'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-q962xtov.eu.auth0.com"
      clientId="Nn7jG3gZpxAwtmPGmUE79iB37fcXtQDa"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased">
        <Header />

        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  )
}

export default MyApp
