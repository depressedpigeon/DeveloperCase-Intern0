import Layout from '../components/Layout'
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout/>
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
  )
}

export default MyApp