import '../styles/globals.css'
import { Scrollbars } from 'react-custom-scrollbars';
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  return <>
  {/* <Scrollbars style={{ width: 500, height: 300 }}></Scrollbars> */}
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
