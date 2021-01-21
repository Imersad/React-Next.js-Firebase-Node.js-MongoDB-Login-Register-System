import React, { useState } from 'react';
import { useRouter } from  'next/router';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import firebase from '../firebase';
import LoginRegisterForm from '../components/LoginRegisterForm';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const router = useRouter();
  const loginWithGoogle = async () => {
    await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => console.log('LOGIN', user))
      .catch(error => console.log(error));
  };
  const login =  async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(user => console.log(user))
      .catch(error => toast.error(error.message))
    ;
  };
  const register =  async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then(user => console.log(user))
      .catch(error => toast.error(error.message))
    ;
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login / Register</h2>
      <div className="row">
        <Button
          className="mb-3 col-md-6 offset-md-3"
          type="danger"
          shape="round"
          icon={<GoogleOutlined />}
          size="large"
          block
          onClick={loginWithGoogle}
        >Login With Google</Button>
        <LoginRegisterForm
          email={loginEmail}
          setEmail={setLoginEmail}
          password={loginPassword}
          setPassword={setLoginPassword}
          btnName="Login"
          handleSubmit={login}
        />
        <LoginRegisterForm
          email={registerEmail}
          setEmail={setRegisterEmail}
          password={registerPassword}
          setPassword={setRegisterPassword}
          btnName="Register"
          handleSubmit={register}
        />
      </div>
    </div>
  )
};

export default Login;
