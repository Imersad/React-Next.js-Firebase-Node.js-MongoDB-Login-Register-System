import React from 'react';
import Nav from '../components/Nav';
import { Provider } from '../context';

// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  )
}
