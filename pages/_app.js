import React from 'react';
import Nav from '../components/Nav';

// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
