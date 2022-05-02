import '../styles/index.scss'
import Layout from '../components/Layout'
import '../components/Layout/layout.module.scss'

function MyApp({ Component, pageProps }) {
  return <Layout>
      <Component {...pageProps} />
    </Layout>
}

export default MyApp