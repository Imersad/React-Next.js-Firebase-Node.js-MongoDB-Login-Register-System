/**
 * Create a component that will keep track of user's auth state
 * then wrap _app.js so that entire app knows if the user is logged in or not
 */
import React, { useEffect,  useContext } from 'react';
import firebase from '../firebase';
import { Context } from '../context';

const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        dispatch({
          type: 'LOGOUT'
        })
      } else {
        const { token } = await user.getIdTokenResult();
        console.log('TOKEN', token);
        // Send token to backend
        // Backend will check if token is valid using (firebase admin tool)
        // If it's verified, you get the same user information in the backend
        // Then decide either to save the user in DB or update existing user
        // Send the user info back to client
      }
    });
  }, []);

  return <>{ children }</>
};

export default FirebaseAuthState;
