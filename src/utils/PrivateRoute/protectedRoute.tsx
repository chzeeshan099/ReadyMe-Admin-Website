'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent:any) => {
  const AuthenticatedComponent = (props:any) => {
   const [isAuthenticated, setAuthenticated] = useState(false)

    useEffect(() => {
      const tokenString = localStorage.getItem('token');
      const isToken = tokenString ? true : false;
      if (!isToken) {
        redirect('/signin');
      }
      setAuthenticated(isToken)
    }, []);
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
  return AuthenticatedComponent;
};

export default withAuth;