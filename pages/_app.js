import '../styles/global.scss'
import OBSContextProvider from '../contexts/OBSContext';

export default function App({ Component, pageProps }) {
  return (
      <>
        <OBSContextProvider>
          <Component {...pageProps} />
        </OBSContextProvider>
      </>
    )
}
