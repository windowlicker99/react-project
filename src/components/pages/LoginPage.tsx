import React, { FC } from 'react';
import { LoginForm } from '@components/page-contents/LoginForm';
import { Logo } from '@components/common/Logo';

export const LoginPage: FC = () => (
  <div className="page-container is-open">
    <div className="login-image">
      <Logo />
    </div>
    <LoginForm />
  </div>
);
