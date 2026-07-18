"use client";
import { io } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_API_BASE;
console.log(SOCKET_URL,'SOCKET_URLSOCKET_URL')

export const userSocket = io(SOCKET_URL, {
  withCredentials: true,
  autoConnect: false,
});