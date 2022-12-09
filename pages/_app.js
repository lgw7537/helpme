import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'
import Layout from '../components/layouts/main'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
