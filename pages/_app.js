import '../styles/globals.css'
import './signup.css'
import './login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../component/Feed.css'
export default function App({ Component, pageProps }) {
  return 
  (
    <AuthWrapper>
    <Component {...pageProps} />
    </AuthWrapper>
  )
}
