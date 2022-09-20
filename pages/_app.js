import { ModalProvider } from '../src/context/modalContext'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>)
}

export default MyApp
