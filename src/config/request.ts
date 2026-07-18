import axios from 'axios';
import localStorageService from '@/utils/localStorage';
import { Router } from 'next/router';
// import { storeDispatch } from '@/reducer/store';
// import { logout } from '@/reducer/auth/authSlice';

export const axiosInstancePrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
});

export const axiosInstancePublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
});

export const configureInterceptors = (router: Router ) => {
  let refreshTokenPromise: Promise<any> | null = null;

  axiosInstancePrivate.interceptors.request.use(
    async (config) => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const formattedToken = token.replace(/^"(.*)"$/, '$1');
          config.headers['Authorization'] = `Bearer ${formattedToken}`;
        }
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstancePrivate.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error?.response?.data?.message === 'Token is expired' ) {
        try {
          const refreshToken = localStorageService.getItem('refreshToken');
          if (refreshToken) {
            refreshTokenPromise = axiosInstancePublic.post('/users/refresh-token', {
              refreshToken,
            });

            const { data } = await refreshTokenPromise;
            localStorageService?.setItem('token', data.token);
            originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;

            return axiosInstancePrivate(originalRequest);
          } else {
          //  storeDispatch(logout())
            localStorageService.clear();
            router.push('/auth/signin');
          }
        } catch (refreshError) {
          console.error('Refresh token request failed:', refreshError);
          localStorageService.clear();
          router.push('/auth/signin');
        }
      }

      if (error.response) {
        console.error('Response error:', error?.response?.data);
      } else if (error.request) {
        console.error('No response received:', error?.request);
      } else {
        console.error('Request error:', error?.message);
      }

      return Promise?.reject(error);
    }
  );
};
