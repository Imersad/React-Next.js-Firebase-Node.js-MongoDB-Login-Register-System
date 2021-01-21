import React, { useContext } from 'react';
import { Context } from '../context';

const Home = () => {
  const { state } = useContext(Context);
  return (
    <div>
      <h2>Home Page</h2>
      {JSON.stringify(state)}
    </div>
  )
};

export default Home;
