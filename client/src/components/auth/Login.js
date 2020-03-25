import React from 'react';
import LoginForm from '../auth/LoginForm';

const Login = props => {
  return (
    <div>
      <LoginForm
        isAuthenticated={props.isAuthenticated}
        LoginUser={props.LoginUser}
      />
    </div>
  );
};

export default Login;
