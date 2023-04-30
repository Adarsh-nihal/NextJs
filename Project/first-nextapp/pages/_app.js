import '@/styles/globals.css'
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
