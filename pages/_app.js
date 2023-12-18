
import store, {   persistor } from '@/store/store'
import '@/styles/globals.css'
import '@/styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {

  return(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <ToastContainer theme='dark' autoClose={2000} />
          <Component {...pageProps} />
        </PersistGate>
  </Provider>
  )
   
}
