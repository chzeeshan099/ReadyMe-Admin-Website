import axios from "axios";

const NEXT_PUBLIC_FRONTEND_BASE = process.env.NEXT_PUBLIC_FRONTEND_BASE;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve();
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthRoute =
      originalRequest.url?.includes("/api/staffUser/loginStaff") ||
      originalRequest.url?.includes("/api/auth/registerUser") ||
      originalRequest.url?.includes("/api/auth/refreshAccessToken");

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthRoute
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: () => resolve(api(originalRequest)),
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.post("/api/auth/refreshAccessToken");
        processQueue(null);
        return api(originalRequest);
      } catch (err) {
        processQueue(err);

        if (typeof window !== "undefined") {
          window.location.href = `${NEXT_PUBLIC_FRONTEND_BASE}/auth/login`;
        }

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;