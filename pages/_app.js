import React from 'react';
import Nav from '../components/Nav';
import { Provider } from '../context';
import FirebaseAuthState from '../components/FirebaseAuthState';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <FirebaseAuthState>
        <Nav />
        <ToastContainer />
        <Component {...pageProps} />
      </FirebaseAuthState>
    </Provider>
  )
}
