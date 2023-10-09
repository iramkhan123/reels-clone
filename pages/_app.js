//import '../styles/globals.css'
import './signup.css'
import './login.css'
import './forgot.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../component/Feed.css'
import '../component/Profile.css'
//import '../component/Profile.css'
import AuthWrapper from '../context/auth';
function MyApp({ Component, pageProps }) {

  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  )
}

export default MyApp