import { AuthProvider } from '../src/auth/auth'
import { ModalProvider } from '../src/context/modalContext'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
    </AuthProvider> )
}

export default MyApp
